import { Injectable } from '@angular/core';
import { IProduct, products } from '../products';

@Injectable({
  providedIn: 'root'
})

/* Serviço para recuperar todos os produtos ou somente um pelo ID */

export class ProductService {
  products: IProduct[] = products;

  constructor() { }

  getAll() {
    return this.products;
  }

  getOne(productId: number) {
    return this.products.find(product => product.id = productId);
  }
}
