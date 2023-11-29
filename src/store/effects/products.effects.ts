import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as ProductsActions from '../actions/products.actions';
import { ProductsService } from '../../app/services/products.service';  //

@Injectable()
export class ProductsEffects {

    constructor(
        private actions$: Actions,
        private productsService: ProductsService  // Inject the ProductsService
    ) { }

    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsActions.loadProducts),
            mergeMap(() => this.productsService.getProducts()  // Use the injected service
                .pipe(
                    map(products => ProductsActions.loadProductsSuccess({ products })),
                    catchError(error => of(ProductsActions.loadProductsFailure({ error })))
                ))
        )
    );
}