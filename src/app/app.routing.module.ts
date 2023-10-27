// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PerfumeComponent } from './perfume/perfume.component';
import {LoginComponent} from "./login/login.component";
import {CustomComponent} from "./custom/custom.component";
import {CartComponent} from "./cart/cart.component";
import {RegisterComponent} from "./register/register.component";
import {OrderComponent} from "./order/order.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'perfume', component: PerfumeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'custom', component: CustomComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
