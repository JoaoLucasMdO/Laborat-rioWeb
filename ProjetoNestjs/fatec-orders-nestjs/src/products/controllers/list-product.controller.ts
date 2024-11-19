import { Controller, Get } from '@nestjs/common';
import { ListProductService } from '../services/list-product.service';

@Controller('produto')
export class ListProductController {
  constructor(private listProductService: ListProductService) {}
  @Get()
  handler() {
    return {
      produtos: this.listProductService.execute(),
    };
  }
}
