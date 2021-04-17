import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { UserRole } from "./user-role.enum";
import * as bcrypt from 'bcrypt';
import { Order } from "src/products/order/order.entity";
@Entity()
@Unique(['email'])
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    email:string
    @Column()
    password:string
    @Column()
    role:UserRole
    @Column()
    salt:string

    @OneToMany(type=>Order,order=>order.user,{eager:true})
    orders : Order[]

    async validatePassword(password:string){
        const res = await bcrypt.hash(password,this.salt)
        return res === this.password
    }
}