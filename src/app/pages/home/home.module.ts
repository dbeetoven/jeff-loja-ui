import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingModule } from 'src/app/shared/loading/loading.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, ProductListComponent, ProductComponent],
  imports: [CommonModule, HomeRoutingModule, LoadingModule],
})
export class HomeModule {}
