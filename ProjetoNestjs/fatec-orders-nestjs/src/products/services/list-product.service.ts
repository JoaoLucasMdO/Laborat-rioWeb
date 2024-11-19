import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../repositories/product.repository';

@Injectable()
export class ListProductService {
  constructor(private productRepository: ProductRepository) {}
  execute() {
    return this.productRepository.listProducts();
  }
}
