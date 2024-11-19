import { Module } from '@nestjs/common';
import { ListProductController } from './controllers/list-product.controller';
import { ListProductService } from './services/list-product.service';
import { ProductRepository } from './repositories/product.repository';

@Module({
  controllers: [ListProductController],
  providers: [ListProductService, ProductRepository],
})
export class ProductsModule {}
