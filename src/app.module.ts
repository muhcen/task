import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './products/config/typeorm.config';
import { ProductsModule } from './products/product.module';
import { UsersModule } from './users/users.module';




@Module({
  imports: [
     ProductsModule,
    TypeOrmModule.forRoot(typeormConfig),
    UsersModule
    ]
})
export class AppModule {}
