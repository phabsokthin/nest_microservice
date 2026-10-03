import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { ProductServiceService } from './product-service.service.js';

@Controller()
export class ProductServiceController {
  constructor(
    private readonly appService: ProductServiceService,
  ) {}

  @MessagePattern({ cmd: 'get_products' })
  getProducts() {
    return this.appService.getProducts();
  }

  @MessagePattern({ cmd: 'get_product' })
  getProduct(id: number) {
    return this.appService.getProduct(
      Number(id),
    );
  }

  @MessagePattern({ cmd: 'create_product' })
  createProduct(data: any) {
    return this.appService.createProduct(data);
  }

  @MessagePattern({ cmd: 'update_product' })
  updateProduct(data: any) {
    return this.appService.updateProduct(
      Number(data.product_id),
      data,
    );
  }

  @MessagePattern({ cmd: 'delete_product' })
  deleteProduct(id: number) {
    return this.appService.deleteProduct(
      Number(id),
    );
  }
}