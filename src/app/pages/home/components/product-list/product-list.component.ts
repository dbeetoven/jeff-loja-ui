import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products$!: Observable<IProduct[]>;
  @Output() productAdded = new EventEmitter();

  addProductToCart(product: IProduct): void {
    this.productAdded.emit(product);
  }
}
