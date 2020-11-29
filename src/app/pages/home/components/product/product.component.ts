import { IProduct } from 'src/app/models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;
  @Output() productAdded = new EventEmitter();

  addProductToCart(product: IProduct): void {
    this.productAdded.emit(product);
  }

  ngOnInit(): void {}
}
