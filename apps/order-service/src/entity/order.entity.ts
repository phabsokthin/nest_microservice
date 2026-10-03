import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'order_id',
  })
  order_id: number;

  @Column({
    name: 'order_number',
    length: 100,
    unique: true,
  })
  orderNumber: string;

  @Column({
    name: 'total_amount',
    type: 'numeric',
    precision: 15,
    scale: 2,
  })
  totalAmount: number;

  @Column({
    length: 30,
    default: 'PENDING',
  })
  status: string;

  @Column({
    name: 'client_id',
    length: 50,
  })
  client_id: string;

  @Column({
    name: 'product_id',
    type: 'bigint',
  })
  product_id: number;

  @CreateDateColumn({
    name: 'created_at',
  })
  created_at: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updated_at: Date;
}