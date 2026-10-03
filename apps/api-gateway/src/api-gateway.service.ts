import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ApiGatewayService {
  constructor(
    @Inject('USER_SERVICE')
    private readonly userService: ClientProxy,
    @Inject('PRODUCT_SERVICE')
    private readonly productService: ClientProxy,
    @Inject('ORDER_SERVICE')
    private readonly orderService: ClientProxy,
  ) {}

  // user
  getUsers() {
    return this.userService.send(
      { cmd: 'get_users' },
      {},
    );
  }

  getUser(id: number) {
    return this.userService.send(
      { cmd: 'get_user' },
      id,
    );
  }

  // product
  getProducts() {
    return this.productService.send(
      { cmd: 'get_products' },
      {},
    );
  }

  getProduct(id: number) {
    return this.productService.send(
      { cmd: 'get_product' },
      id,
    );
  }

  createProduct(createProductDto: any) {
    return this.productService.send(
      { cmd: 'create_product' },
      createProductDto,
    );
  }

  updateProduct(id: number, updateProductDto: any) {
    return this.productService.send(
      { cmd: 'update_product' },
      {
        id,
        updateProductDto,
      },
    );
  }

  deleteProduct(id: number) {
    return this.productService.send(
      { cmd: 'delete_product' },
      id,
    );
  }

  // order
  getOrders() {
    return this.orderService.send(
      { cmd: 'get_orders' },
      {},
    );
  }

  getOrder(id: number) {
    return this.orderService.send(
      { cmd: 'get_order' },
      id,
    );
  }
  
  createOrder(createOrderDto: any) {
    return this.orderService.send(
      { cmd: 'create_order' },
      createOrderDto,
    );
  }
  updateOrder(id: number, updateOrderDto: any) {
    return this.orderService.send(
      { cmd: 'update_order' },
      {
        id,
        updateOrderDto,
      },
    );
  }
  deleteOrder(id: number) {
    return this.orderService.send(
      { cmd: 'delete_order' },
      id,
    );
  }
}