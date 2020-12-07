import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IProduct } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit, OnDestroy {
  private destroyed$: Subject<any> = new Subject();
  quantity: number;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.productsIntoCart$.state$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((products: IProduct[]) => {
        this.quantity = products.reduce((acc, next) => {
          return (acc += next.quantity);
        }, 0);
      });
  }

  ngOnDestroy(): void {
    // this.destroyed$.next(false);
    // this.destroyed$.complete();
    // this.destroyed$.unsubscribe();
  }
}
