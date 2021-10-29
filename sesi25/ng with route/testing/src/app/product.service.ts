import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from './mock-product';
import { map } from 'rxjs/operators';
import { Product } from './product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    console.log("fetched list product...");
    return products;
  }

  // getOneProduct(id: number): Observable<Product> {
  //   let product: Product
  //   this.getProducts().subscribe(products => product = products.find(p => p.id === id)!
  //   return of(product)


  // }


  products = of(PRODUCTS)
  getOneProduct(id: number): Observable<Product> {

    return this.products.pipe(map(products => products.filter(product => product.id == id)[0]))

  }

}
