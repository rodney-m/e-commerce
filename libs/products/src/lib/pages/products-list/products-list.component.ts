import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../models/category';
import { Product } from '../../models/product';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {
  
  products : Product[] = []
  categories : Category[] = []
  isCategoryPage! : boolean;

  constructor(
    private productsService : ProductsService,
    private categoriesService : CategoriesService,
    private activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    // this._getProducts();
    this._getCategories();
    this.activatedRoute.params.subscribe((params)=> {
      params.categoryId ? this._getProducts([params.categoryId]) : this._getProducts();
      params.categoryId ? this.isCategoryPage = true : this.isCategoryPage = false;
    })
  }

  private _getProducts(categoriesFilter?: string[]){
    this.productsService.getProducts(categoriesFilter).subscribe(products => {
      this.products = products
    })
  }

  private _getCategories(){
    this.categoriesService.getCategories().subscribe(categories => {
      this.categories = categories
    })
  }

  categoryFilter(){
    const selectedCategories = this.categories.filter(category => category.checked)
          .map((category) => category.id);
    
    this._getProducts(selectedCategories)
  }
}
