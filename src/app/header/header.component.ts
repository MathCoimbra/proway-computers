import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    /* adicionando serviço de carrinho no header para adicionar a contagem de itens dentro do carrinho */
    public cartService: CartService
  ) { }

  ngOnInit(): void {
  }

}
