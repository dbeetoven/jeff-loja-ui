import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IOrder, IProduct } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  totalItems: number;
  totalToPaid: number;
  form: FormGroup;
  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }
  removeProduct(product: IProduct): void {
    const productsLeft = this.productService.productsIntoCart$.state.filter(
      ({ id }) => id !== product.id
    );
    this.productService.productsIntoCart$.set(productsLeft);
  }
  addProductToCart(product: IProduct): void {
    const indexProduct: number = this.productService.productsIntoCart$.state.findIndex(
      ({ id }) => id === product.id
    );
    const products = this.productService.productsIntoCart$.state;
    if (indexProduct === -1) {
      products.push({ ...product, quantity: 1 });
      this.productService.productsIntoCart$.patch(products);
      return;
    }
    products[indexProduct].quantity += 1;
    this.productService.productsIntoCart$.patch(products);
  }
  onSubmit(formValue: any): void {
    const order: IOrder = formValue;
    order.products = this.productService.productsIntoCart$.state;
    order.totalCost = this.totalToPaid;
    order.quantity = this.totalItems;
    console.log({ order });
  }

  ngOnInit(): void {
    this.productService.productsIntoCart$.state$.subscribe((products) => {
      this.totalItems = products.reduce(
        (sum, prod) => (sum += prod.quantity),
        0
      );
      this.totalToPaid = products.reduce(
        (sum, prod) => (sum += prod.price * prod.quantity),
        0
      );
    });
  }
}
