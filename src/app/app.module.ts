import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lapa1Component } from './lapa1/lapa1.component';
import { Lapa2Component } from './lapa2/lapa2.component';
import { Lapa3Component } from './lapa3/lapa3.component';
import { MenuComponent } from './menu/menu.component';
import { Lapa4Component } from './lapa4/lapa4.component';
import { CounterService } from './services/counter.service';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './shop/cart/cart.component';
import { ProductComponent } from './shop/product/product.component';
import { ShopService } from './services/shop.services';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    Lapa1Component,
    Lapa2Component,
    Lapa3Component,
    MenuComponent,
    Lapa4Component,
    ShopComponent,
    CartComponent,
    ProductComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CounterService,
    ShopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
