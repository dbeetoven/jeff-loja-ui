import { StoreService } from 'src/app/core/services/store.service';
import { Injectable } from '@angular/core';
import { IproductPage } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class ProductPageStore extends StoreService<IproductPage> {
  protected store = 'products-page';

  constructor() {
    super({
      loading: true,
      products: [],
    });
  }
}
