import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IProduct } from '../models';
import { ProductPageStore } from './product-page.store';
import { ProductFirestore } from './productFirestore.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private firestore: ProductFirestore,
    private store: ProductPageStore
  ) {
    this.firestore
      .collection$()
      .pipe(
        tap((products) => {
          this.store.patch(
            {
              loading: false,
              products,
            },
            `employees collection subscription`
          );
        })
      )
      .subscribe();
  }

  get products$(): Observable<IProduct[]> {
    return this.store.state$.pipe(
      map((state) => (state.loading ? [] : state.products))
    );
  }

  get loading$(): Observable<boolean> {
    return this.store.state$.pipe(map((state) => state.loading));
  }

  get noResults$(): Observable<boolean> {
    return this.store.state$.pipe(
      map((state) => {
        return !state.loading && state.products && state.products.length === 0;
      })
    );
  }

  get formStatus$(): Observable<string> {
    return this.store.state$.pipe(map((state) => state.formStatus));
  }

  create(product: IProduct) {
    this.store.patch(
      {
        loading: true,
        products: [],
        formStatus: 'Saving...',
      },
      'product created'
    );
    return this.firestore
      .create(product)
      .then((_) => {
        this.store.patch(
          {
            formStatus: 'Saved!',
          },
          'product create SUCCESS'
        );
        setTimeout(
          () =>
            this.store.patch(
              {
                formStatus: '',
              },
              'product create timeout reset formStatus'
            ),
          2000
        );
      })
      .catch((err) => {
        this.store.patch(
          {
            loading: false,
            formStatus: 'An error ocurred',
          },
          'product create ERROR'
        );
      });
  }

  delete(id: string): any {
    this.store.patch({ loading: true, products: [] }, 'product delete');
    return this.firestore.delete(id).catch((err) => {
      this.store.patch(
        {
          loading: false,
          formStatus: 'An error ocurred',
        },
        'product delete ERROR'
      );
    });
  }
}