import { StoreService } from 'src/app/core/services/store.service';
import { Injectable } from '@angular/core';
import { IproductPage } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductPageStore extends StoreService<IproductPage> {
  protected store = 'employees-page';

  constructor() {
    super({
      loading: true,
      products: [],
    });
  }
}
