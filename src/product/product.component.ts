import { Component, OnInit } from '@angular/core';
import {ProductsService} from './products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private pro : ProductsService) { }
  products;
  ngOnInit() {
    this.products = "produit.json";
  }

}