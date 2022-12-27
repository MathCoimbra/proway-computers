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
    this.items = JSON.parse(localStorage.getItem('cart') || '[]');
    return this.items;
  }

  addToCart(product: IProductCart) {
    /* adicionando os dados do produto na lista de itens (carrinho) */
    this.items.push(product);
    /* JSON stringify - converter de objeto para string */
    /* abaixo está sendo armazenado os dados do produto na localStorage */
    this.addToLocalStorage();
  }

  /* método para excluir um produto do carrinho através do ID */
  clearItemCart(productId: number) {
    this.items = this.items.filter(item => item.id !== productId);
    this.addToLocalStorage();
  }

  clearCart() {
    this.items = [];
    localStorage.clear();
  }

  addToLocalStorage() {
    return localStorage.setItem('cart', JSON.stringify(this.items));
  }

}
