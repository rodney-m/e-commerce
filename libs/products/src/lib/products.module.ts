import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModule } from '@bluebits/orders';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ButtonModule } from 'primeng/button';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import {CheckboxModule} from 'primeng/checkbox';
import {RatingModule} from 'primeng/rating';
import {InputNumberModule} from 'primeng/inputnumber';
import {ToastModule} from 'primeng/toast'
import { ConfirmationService, MessageService } from 'primeng/api';

import { FormsModule } from '@angular/forms';
import { ProductPageComponent } from './pages/product-page/product-page.component';

import { UiModule } from '@bluebits/ui'

const routes : Routes = [
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'products/:productid',
    component: ProductPageComponent
  },
  {
    path: 'category/:categoryId',
    component: ProductsListComponent
  },
]
@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule, 
    OrdersModule, 
    RouterModule.forChild(routes), 
    CheckboxModule,
    InputNumberModule,
    ToastModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    
    UiModule],
    
  declarations: [
    ProductsSearchComponent,
    CategoriesBannerComponent,
    ProductItemComponent,
    FeaturedProductsComponent,
    ProductsListComponent,
    ProductPageComponent
  ],
  exports: [
    ProductsSearchComponent,
    CategoriesBannerComponent,
    ProductItemComponent,
    FeaturedProductsComponent,
    ProductsListComponent,
    ProductPageComponent
  ],
  providers: [MessageService]
})
export class ProductsModule {}
