import { ActionReducerMap, Store, select } from "@ngrx/store";
import { ProductsState } from "../models/products.model";
import { productsReducer } from "./reducers/products.reducer";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface AppState{
    products: ProductsState
}

export const reducers: ActionReducerMap<AppState> = {
    products: productsReducer
}
