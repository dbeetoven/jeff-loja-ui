import { LocalstorageService } from './../../core/services/localstorage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
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
  constructor(
    public productService: ProductService,
    private fb: FormBuilder,
    private domSanitizer: DomSanitizer,
    private localStorage: LocalstorageService
  ) {
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
    const products = this.productService.productsIntoCart$.state;
    const indexProduct: number = products.findIndex(
      ({ id }) => id === product.id
    );

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

  removeProductToCart(product: IProduct): void {
    const products = this.productService.productsIntoCart$.state;
    const indexProduct: number = products.findIndex(
      ({ id }) => id === product.id
    );

    if (indexProduct === -1) {
      return;
    }

    products[indexProduct].quantity -= 1;
    if (products[indexProduct].quantity <= 0) {
      this.removeProduct(product);
      return;
    }
    this.productService.productsIntoCart$.set(products);
    this.localStorage.setItem('_xcartItems', JSON.stringify(products));
  }

  onSubmit(formValue: any): void {
    const order: IOrder = formValue;
    order.products = this.productService.productsIntoCart$.state;
    order.totalCost = this.totalToPaid;
    order.quantity = this.totalItems;
  }
  toSafePathImage(imgBase64Url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(
      `data:image/png;base64, ${imgBase64Url}`
    );
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
