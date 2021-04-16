import { Body, ConflictException, Controller, Get, Inject, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AuthGuard } from '@nestjs/passport';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
import { ProductsCredentialsDto } from './productsCredentials.dto';

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

    @Post()
    async createProduct(
        @Body(ValidationPipe) productsCredentialsDto : ProductsCredentialsDto,
        @Req() req
    ):Promise<Product>{
        if(req.user.role === 'admin'){
            return this.productsService.createProduct(productsCredentialsDto);
        }else{
            throw new ConflictException("you con't create new products.")
        }
    }

    // @Post()
    // async buyProducts

}
