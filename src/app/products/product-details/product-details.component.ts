import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/products';
import { ProductService } from 'src/app/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct | undefined;
  quantity = 1;

  constructor(
    private productService: ProductService,
    /* Classe que será utilizada para pegar o parâmetro da URL */
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /* pegando o parâmetro da url através do paramMap */
    const routeParams = this.route.snapshot.paramMap;
    /* especificando qual parâmetro será recuperado (id - conforme definido em products-routing-module) e adicionando na variável adequada */
    const productId = Number(routeParams.get("id"));
    /*  */
    this.product = this.productService.getOne(productId);
  }

}
