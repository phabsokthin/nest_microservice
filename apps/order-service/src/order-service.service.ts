import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientProxy } from '@nestjs/microservices';

import { Order } from './entity/order.entity.js';



@Injectable()
export class OrderServiceService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @Inject('PRODUCT_SERVICE')
    private readonly productService: ClientProxy,
  ) {}

  // CREATE
  async createOrder(data: any) {
    const order = this.orderRepository.create({
      orderNumber: data.orderNumber,
      totalAmount: data.totalAmount,
      status: data.status,
      client_id: data.client_id,
      product_id: data.product_id,
    });

    return this.orderRepository.save(order);
  }

  // GET ALL
  // async getOrders() {
  //   return this.orderRepository.find({
  //     order: {
  //       order_id: 'DESC',
  //     },
  //   });
  // }

   async getOrders() {
    const orders = await this.orderRepository.find({
      order: {
        order_id: 'DESC',
      },
    });

    const result = await Promise.all(
      orders.map(async (order) => {
        const product =
          await this.productService
            .send(
              { cmd: 'get_product' },
              order.product_id,
            )
            .toPromise();
        return {
          ...order,
          product,
        };
      }),
    );

    return result;
  }

  // GET ONE
  async getOrder(id: number) {
    return this.orderRepository.findOne({
      where: {
        order_id: id,
      },
    });
  }

  // UPDATE
  async updateOrder(
    id: number,
    data: any,
  ) {
    await this.orderRepository.update(
      id,
      data,
    );

    return this.getOrder(id);
  }

  // DELETE
  async deleteOrder(id: number) {
    await this.orderRepository.delete(id);

    return {
      message: 'Order deleted successfully',
    };
  }
}