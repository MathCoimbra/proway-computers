import { Component, OnInit } from '@angular/core';
import { IProduct, products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = products;

  constructor() { }

  ngOnInit(): void {
  }

}
