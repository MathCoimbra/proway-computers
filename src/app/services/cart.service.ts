import { Injectable } from '@angular/core';
import { IProductCart } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: IProductCart[] = [];

  constructor() { }

  /* método para pegar os dados do carrinho através da localStorage, criado para adicionar a contagem de itens no header */
  getCart() {
    /* JSON parse - converter de string para objeto */
    return JSON.parse(localStorage.getItem('cart') || '');
  }

  addToCart(product: IProductCart) {
    /* adicionando os dados do produto na lista de itens (carrinho) */
    this.items.push(product);
    /* JSON stringify - converter de objeto para string */
    /* abaixo está sendo armazenado os dados do produto na localStorage */
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  clearCart() {
    this.items = [];
    localStorage.clear();
  }

}
