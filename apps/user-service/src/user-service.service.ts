import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private users = [
    {
      id: 1,
      name: 'Dara',
      email: 'dara@example.com',
    },
    {
      id: 2,
      name: 'Sokha',
      email: 'sokha@example.com',
    },
    {
      id: 3,
      name: 'Pheng',
      email: 'pheng@example.com',
    },
  ];

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find(
      (user) => user.id === id,
    );
  }
}