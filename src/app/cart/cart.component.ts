import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProductCart } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  itemsCart: IProductCart[] = [];
  total = 0;

  constructor(
    public cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itemsCart = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.itemsCart.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  clearItemCart(productId: number) {
    this.itemsCart = this.itemsCart.filter(item => item.id !== productId);
    this.cartService.clearItemCart(productId);
    this.calculateTotal();
  }

  buy() {
    alert('Compra finalizada');
    this.cartService.clearCart();
    this.router.navigate(['products']);
  }

}
