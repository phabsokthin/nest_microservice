import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';

import { ApiGatewayService } from './api-gateway.service.js';

@Controller()
export class ApiGatewayController {
  constructor(
    private readonly appService: ApiGatewayService,
  ) { }

  // user
  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Get('users/:id')
  getUser(@Param('id') id: string) {
    return this.appService.getUser(Number(id));
  }

  // product
  @Get('products')
  getProducts() {
    return this.appService.getProducts();
  }

  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return this.appService.getProduct(Number(id));
  }

  @Post('products')
  createProduct(@Body() createProductDto: any) {
    return this.appService.createProduct(createProductDto);
  }

  @Put('products/:id')
  updateProduct(@Param('id') id: string, @Body() updateProductDto: any) {
    return this.appService.updateProduct(Number(id), updateProductDto);
  }

  @Delete('products/:id')
  deleteProduct(@Param('id') id: string) {
    return this.appService.deleteProduct(Number(id));
  }

  // order
  @Get('orders')
  getOrders() {
    return this.appService.getOrders();
  }

  @Get('orders/:id')
  getOrder(@Param('id') id: string) {
    return this.appService.getOrder(Number(id));
  }
}