import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
