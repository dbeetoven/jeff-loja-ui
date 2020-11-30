import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadProductComponent } from './upload-product.component';

const routes: Routes = [{ path: '', component: UploadProductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadProductRoutingModule {}
