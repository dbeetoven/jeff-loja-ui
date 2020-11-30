import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UploadProductRoutingModule } from './upload-product-routing.module';
import { UploadProductComponent } from './upload-product.component';

@NgModule({
  declarations: [UploadProductComponent],
  imports: [CommonModule, UploadProductRoutingModule],
})
export class UploadProductModule {}
