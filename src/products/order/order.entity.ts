import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderStatus } from "../product-status.enum";
import { Product } from "../product.entity";


@Entity()
export class Order extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id:number 
    @ManyToOne(() => User , user => user.id,{eager:false})
    user:User
    @ManyToOne(() => Product , product => product.id)
    id_product:Product
    @Column()
    status:OrderStatus
}