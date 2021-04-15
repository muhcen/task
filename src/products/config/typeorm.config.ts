import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Product } from "../product.entity";


export const typeormConfig : TypeOrmModuleOptions={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'products',
    entities: [Product,__dirname + '/../**/*.entity.ts'],
    synchronize: true,    
}