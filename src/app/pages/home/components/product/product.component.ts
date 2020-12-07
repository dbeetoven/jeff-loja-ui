import { IProduct } from 'src/app/models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;
  @Output() productAdded = new EventEmitter(true);

  constructor(private router: Router, private domSanitizer: DomSanitizer) {}

  addProductToCart(product: IProduct): void {
    this.productAdded.emit(product);
  }

  toSafePathImage(imgBase64Url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(
      `data:image/png;base64, ${imgBase64Url}`
    );
  }
  buyProduct(product: IProduct): void {
    this.productAdded.emit(product);
    this.router.navigate(['/shoppingCart']);
  }

  ngOnInit(): void {}
}
