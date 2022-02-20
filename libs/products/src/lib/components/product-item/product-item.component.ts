import { Component, Input } from '@angular/core';
import { CartItem, CartService } from '@bluebits/orders';
import { MessageService } from 'primeng/api';
import { Product } from '../../models/product';

@Component({
  selector: 'products-product-item',
  templateUrl: './product-item.component.html',
  styles: []
})
export class ProductItemComponent   {
  @Input() product: Product;

  constructor(
              private cartService: CartService,
              private messageService: MessageService
              ) {}

  addProductToCart(){
    const cartItem: CartItem ={
      productId: this.product.id,
      quantity: 1
    }
    this.cartService.setCartItem(cartItem);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Product has been added to cart'
    });
  }
}
