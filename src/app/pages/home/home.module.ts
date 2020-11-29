import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FooterModule, TopbarModule } from 'src/app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [HomeComponent, ProductListComponent, ProductComponent],
  imports: [CommonModule, HomeRoutingModule, TopbarModule, FooterModule],
})
export class HomeModule {}
