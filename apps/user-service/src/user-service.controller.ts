import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './user-service.service.js';

@Controller()
export class UserController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @MessagePattern({ cmd: 'get_users' })
  getUsers() {
    return this.appService.getUsers();
  }

  @MessagePattern({ cmd: 'get_user' })
  getUser(id: number) {
    return this.appService.getUser(Number(id));
  }
}