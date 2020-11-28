import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading$!: Observable<boolean>;
  products$!: Observable<IProduct[]>;
  noResults$!: Observable<boolean>;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loading$ = this.productService.loading$;
    this.noResults$ = this.productService.noResults$;
    this.products$ = this.productService.products$;
  }
}
