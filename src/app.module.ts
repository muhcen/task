import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';



@Module({
  imports: [ProductsModule],
  providers: [ProductsService],
})
export class AppModule {}
