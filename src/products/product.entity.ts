import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ProductStatus } from "./product-status.enum";


@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column()
    price:number

    @Column()
    describe : string
    
    @Column()
    status:ProductStatus
}