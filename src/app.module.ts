import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './products/config/typeorm.config';

import { ProductsModule } from './products/product.module';
import { ProductsService } from './products/products.service';



@Module({
  imports: [ProductsModule,
    TypeOrmModule.forRoot(typeormConfig)
    ],
  providers: [ProductsService],
})
export class AppModule {}
