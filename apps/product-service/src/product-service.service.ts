import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './entity/product.entity.js';

@Injectable()
export class ProductServiceService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // GET ALL
  async getProducts() {
    return this.productRepository.find();
  }

  // GET ONE
  async getProduct(id: number) {
    return this.productRepository.findOne({
      where: {
        product_id: id,
      },
    });
  }

  // CREATE
  async createProduct(data: Partial<Product>) {
    const product =
      this.productRepository.create(data);

    return this.productRepository.save(product);
  }

  // UPDATE
  async updateProduct(
    id: number,
    data: Partial<Product>,
  ) {
    await this.productRepository.update(
      id,
      data,
    );

    return this.getProduct(id);
  }

  // DELETE
  async deleteProduct(id: number) {
    await this.productRepository.delete(id);

    return {
      message: 'Product deleted successfully',
    };
  }
}