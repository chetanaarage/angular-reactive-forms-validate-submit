import { Injectable } from '@angular/core';
import { Product } from "../product/product"
import { HttpClient } from '@angular/common/http'
import "rxjs/add/operator/map";

@Injectable()
export class ProductService {

  products: any = [
    {
      'name': "laptop",
      "id": 1
    },
    {
      'name': "mobile",
      "id": 2
    },
    {
      'name': "book",
      "id": 3
    },

  ]

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('assets/pets-data.json');
  }

  getProduct(id) {
    return this.products[id];
    //console.log("result", result);

  }

  addProduct(){
    this.products.push()
  }

  
}
