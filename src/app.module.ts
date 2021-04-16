import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { typeormConfig } from './products/config/typeorm.config';
import { ProductsModule } from './products/product.module';




@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot(typeormConfig),
    AuthModule
    ]
})
export class AppModule {}
