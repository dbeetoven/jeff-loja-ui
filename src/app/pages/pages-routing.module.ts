import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((hm) => hm.HomeModule),
      },
      {
        path: 'shoppingCart',
        loadChildren: () =>
          import('./shopping-cart/shopping-cart.module').then(
            (shpm) => shpm.ShoppingCartModule
          ),
      },
      {
        path: 'upload-product',
        loadChildren: () =>
          import('./upload-product/upload-product.module').then(
            (shpm) => shpm.UploadProductModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
