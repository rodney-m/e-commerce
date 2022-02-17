import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-product-page',
  templateUrl: './product-page.component.html',
  styles: [
  ]
})
export class ProductPageComponent implements OnInit, OnDestroy {
  endSubs$: Subject<any> = new Subject();
  product! : Product;
  quantity!: number;

  constructor(
    private productsService: ProductsService,
    private activatedRoute : ActivatedRoute
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params.productid){
        this._getProduct(params.productid);
      }
    })
  }

  ngOnDestroy(): void {
      this.endSubs$.next();
      this.endSubs$.complete()
  }

  private _getProduct(id: string){
    this.productsService.getProduct(id)
    .pipe(takeUntil(this.endSubs$))
    .subscribe(product => {
      this.product = product
      console.log(product)
    })
  }

  addProductToCart(){

  }

}
