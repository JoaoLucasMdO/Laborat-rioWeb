import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  private products = [];

  constructor() {
    this.products.push({
      id: 1,
      descricao: 'Bolacha',
      marca: 'tortuguita',
      valor: 1.99,
      peso_grama: 100,
      sabor: 'morango',
    });
  }
  listProducts() {
    return this.products;
  }
}
