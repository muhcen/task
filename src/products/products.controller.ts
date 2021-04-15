import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(
        private productsService: ProductsService,
        ){}

    @Get()
    async getAllProducts():Promise<Product[]>{
        return this.productsService.getAllProducts();
    }

}
