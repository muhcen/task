import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderStatus } from "../product-status.enum";
import { Product } from "../product.entity";


@Entity()
export class Order extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id:number 
    @ManyToOne(type => User , user => user.id)
    id_user:string
    @ManyToOne(type => Product , product => product.id)
    id_product:string
    @Column()
    status:OrderStatus

}