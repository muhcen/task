import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AuthGuard } from '@nestjs/passport';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Controller('products')
@UseGuards(AuthGuard())
export class ProductsController {
    constructor(
        private productsService: ProductsService,
        ){}

    @Get()
    async getAllProducts():Promise<Product[]>{
        return this.productsService.getAllProducts();
    }

}
