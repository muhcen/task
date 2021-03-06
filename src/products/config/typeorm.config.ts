import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/auth/user.entity";
import { Order } from "../order/order.entity";
import { Product } from "../product.entity";


export const typeormConfig : TypeOrmModuleOptions={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'products',
    entities: [Product,User,Order],
    synchronize: true,    
}