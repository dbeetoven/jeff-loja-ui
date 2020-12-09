import { LoadingModule } from 'src/app/shared/loading/loading.module';
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
    LoadingModule,
    UploadProductRoutingModule,
  ],
})
export class UploadProductModule {}
