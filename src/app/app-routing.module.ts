import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lapa1Component } from './lapa1/lapa1.component';

import { Lapa2Component } from './lapa2/lapa2.component';
import { Lapa3Component } from './lapa3/lapa3.component';
import { Lapa4Component } from './lapa4/lapa4.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './shop/cart/cart.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [

  {
    path: 'lapa1',
    component: Lapa1Component
  }, 
  {
    path: 'lapa2',
    component: Lapa2Component
  },
  {
    path: 'lapa3',
    component: Lapa3Component
  },
  {
    path: 'lapa4',
    component: Lapa4Component
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'shop/cart',
    component: CartComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
