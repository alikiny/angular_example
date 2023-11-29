import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ProductsActions from '../../store/actions/products.actions';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { AppState } from '../../store/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.products$ = this.store.select('products');
    // Dispatch the loadProducts action when the component initializes
    this.store.dispatch(ProductsActions.loadProducts());
  }
}