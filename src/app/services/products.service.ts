import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private apiUrl = 'https://api.escuelajs.co/api/v1/products'; // Replace with your API endpoint

    constructor(private http: HttpClient) { }

    // Fetch all products
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl);
    }

    //add other CRUD operations
}