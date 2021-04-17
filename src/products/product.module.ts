import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { OrderRepository } from './order/order.repository';
import { ProductsController } from './products.controller';
import { ProductRepository } from './products.repository';
import { ProductsService } from './products.service';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([ProductRepository]),
    TypeOrmModule.forFeature([OrderRepository]),

  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
