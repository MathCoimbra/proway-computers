import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, IProductCart } from 'src/app/products';
import { CartService } from 'src/app/services/cart.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct | undefined;
  quantity = 1;

  constructor(
    /* Serviço para recuperar os produtos */
    private productService: ProductService,
    /* Classe que será utilizada para pegar o parâmetro da URL */
    private route: ActivatedRoute,
    /* Serviço para mostrar a notificação de adição ao carrinho */
    private notificationService: NotificationService,
    /* Serviço de adicionar os itens ao carrinho */
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    /* pegando o parâmetro da url através do paramMap */
    const routeParams = this.route.snapshot.paramMap;
    /* especificando qual parâmetro será recuperado (id - conforme definido em products-routing-module) e adicionando na variável adequada */
    const productId = Number(routeParams.get("id"));
    /*  */
    this.product = this.productService.getOne(productId);
  }

  addToCartAlert() {
    /* chamando a função do serviço de notificação para mostrar o alerta em tela com a frase abaixo*/
    this.notificationService.notificate('Produto adicionado ao carrinho!');
  }

  addItemsToCart() {
    this.addToCartAlert();

    const product: IProductCart = {
      /* ... - informa que todas as propriedades desse objeto são desse produto definido nessa classe na linha 15  */
      /* ! - informa que são dados não undefined */
      ...this.product!,
      quantidade: this.quantity
    };
    /* adicionando os itens do produto de fato ao carrinho pela classe de serviço */
    this.cartService.addToCart(product);
  }

}
