import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OrderServiceService } from './order-service.service.js';

@Controller()
export class OrderServiceController {
  constructor(
    private readonly appService: OrderServiceService,
  ) {}

  // CREATE
  @MessagePattern({ cmd: 'create_order' })
  createOrder(data: any) {
    return this.appService.createOrder(data);
  }

  // GET ALL
  @MessagePattern({ cmd: 'get_orders' })
  getOrders() {
    return this.appService.getOrders();
  }

  // GET ONE
  @MessagePattern({ cmd: 'get_order' })
  getOrder(id: number) {
    return this.appService.getOrder(
      Number(id),
    );
  }

  // UPDATE
  @MessagePattern({ cmd: 'update_order' })
  updateOrder(data: {
    id: number;
    data: any;
  }) {
    return this.appService.updateOrder(
      Number(data.id),
      data.data,
    );
  }

  // DELETE
  @MessagePattern({ cmd: 'delete_order' })
  deleteOrder(id: number) {
    return this.appService.deleteOrder(
      Number(id),
    );
  }
}