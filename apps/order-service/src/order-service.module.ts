import { Module } from '@nestjs/common';
import { OrderServiceController } from './order-service.controller.js';
import { OrderServiceService } from './order-service.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order.entity.js';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
 imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin123',
      database: 'dborder',
      entities: [Order],
      synchronize: false,
    }),

    TypeOrmModule.forFeature([Order]),

    // product microservice
     ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [OrderServiceController],
  providers: [OrderServiceService],
})
export class OrderServiceModule {}
