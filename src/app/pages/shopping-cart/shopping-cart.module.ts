import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [CommonModule, ShoppingCartRoutingModule],
})
export class ShoppingCartModule {}
