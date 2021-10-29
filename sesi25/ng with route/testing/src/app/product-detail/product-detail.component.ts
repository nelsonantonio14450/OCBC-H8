import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product_id: number;
  // temp: Product[] = [];
  products: Product = {} as Product;
  constructor(private actRoute: ActivatedRoute, private productService: ProductService) {
    this.product_id = this.actRoute.snapshot.params.id;
    this.productService = productService
  }

  ngOnInit(): void {
    this.getOneProduct(this.product_id);
  }

  // getProducts() {
  //   this.productService.getProducts().subscribe(x => this.temp = x);
  //   this.products = this.temp.filter(x => x.id == this.product_id);
  // }

  getOneProduct(id: number) {
    this.productService.getOneProduct(id).subscribe(x => this.products = x)
  }
}
