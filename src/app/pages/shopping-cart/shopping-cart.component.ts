import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { IProduct } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  constructor(private productService: ProductService) {}

  total(): number {
    return this.productService.productsIntoCart$.state.reduce(
      (sum, prod) => (sum += prod.quantity),
      0
    );
  }

  removeProduct(product: IProduct): void {
    const productsLeft = this.productService.productsIntoCart$.state.filter(
      ({ id }) => id !== product.id
    );
    this.productService.productsIntoCart$.set(productsLeft);
  }
  ngOnInit(): void {}
}
