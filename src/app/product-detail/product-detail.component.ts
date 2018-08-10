import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Params } from '@angular/router';
import { ProductService } from '../services/product.service'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {

  id: number
  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  product: any;
  ngOnInit() {
    this.route.params.subscribe(Params => {
      this.id = +Params['id'];
    });

    this.product = this.productService.getProduct(this.id);

    console.log("this.id", this.product);
  }

}
