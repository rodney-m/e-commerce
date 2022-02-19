import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart.service';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import {BadgeModule} from 'primeng/badge';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import {InputNumberModule} from 'primeng/inputnumber';


import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { FormsModule } from '@angular/forms';

const routes :Routes = [
  {
    path : 'cart',
    component: CartPageComponent
  }
]
@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    BadgeModule, 
    ButtonModule, 
    InputNumberModule,
    ToastModule, 
    RouterModule.forChild(routes)
  ],
  declarations: [CartIconComponent, CartPageComponent, OrderSummaryComponent],
  exports: [CartIconComponent, CartPageComponent, OrderSummaryComponent, ],
})
export class OrdersModule {
  constructor(cartService: CartService){
    cartService.innitCartLocalStorage();
  }
}
