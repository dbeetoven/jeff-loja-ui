import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';
import { LocalstorageService } from './../../core/services/localstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading$!: Observable<boolean>;
  products$!: Observable<IProduct[]>;
  noResults$!: Observable<boolean>;
  constructor(
    private productService: ProductService,
    private localStorage: LocalstorageService
  ) {
    const productsR = new BehaviorSubject<IProduct[]>([]);
    this.products$ = productsR.asObservable();
  }

  addProductToCart(product: IProduct): void {
    const indexProduct: number = this.productService.productsIntoCart$.state.findIndex(
      ({ id }) => id === product.id
    );
    const products = this.productService.productsIntoCart$.state;
    if (indexProduct === -1) {
      products.push({ ...product, quantity: 1 });
      this.productService.productsIntoCart$.set(products);
      this.localStorage.setItem('_xcartItems', JSON.stringify(products));
      return;
    }
    products[indexProduct].quantity += 1;
    this.productService.productsIntoCart$.set(products);
    this.localStorage.setItem('_xcartItems', JSON.stringify(products));
  }

  ngOnInit(): void {
    this.loading$ = this.productService.loading$;
    this.noResults$ = this.productService.noResults$;
    this.products$ = this.productService.products$;
  }
}
