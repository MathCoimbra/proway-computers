import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, products } from '../products';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const products = this.productService.getAll();

    this.route.queryParamMap.subscribe(params => {
      const description = params.get('description')?.toLowerCase();

      if (description) {
        this.products = products.filter(product => product.descricao.toLowerCase().includes(description));
        return;
      }

      this.products = products;

    });
  }

}
