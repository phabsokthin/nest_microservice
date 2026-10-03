import { Module } from '@nestjs/common';
import { ProductServiceController } from './product-service.controller.js';
import { ProductServiceService } from './product-service.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity.js';


@Module({
   imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin123',
      database: 'dbproduct',
      entities: [Product],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [ProductServiceController],
  providers: [ProductServiceService],
})
export class ProductServiceModule {}
