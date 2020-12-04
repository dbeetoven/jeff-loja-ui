import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadProductRoutingModule } from './upload-product-routing.module';
import { UploadProductComponent } from './upload-product.component';

@NgModule({
  declarations: [UploadProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UploadProductRoutingModule,
  ],
})
export class UploadProductModule {}
