import { Module } from '@nestjs/common';
import { UserController } from './user-service.controller.js';
import { AppService } from './user-service.service.js';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [AppService],
})
export class UserModule {}