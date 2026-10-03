import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('product')
export class Product {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'product_id',
    })
    product_id: number;

    @Column({
        name: 'product_name',
        length: 150,
    })
    product_name: string;

    @Column({
        length: 100,
        unique: true,
    })
    sku: string;

    @Column({
        type: 'text',
        nullable: true,
    })
    description: string;

    @Column({
        type: 'numeric',
        precision: 15,
        scale: 2,
    })
    price: number;

    @Column({
        type: 'integer',
        default: 0,
    })
    quantity: number;

    @Column({
        length: 20,
        default: 'ACTIVE',
    })
    status: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
    })
    created_at: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
    })
    updated_at: Date;
}