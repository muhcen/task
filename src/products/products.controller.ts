import { Body, ConflictException, Controller, Get, Inject, Param, ParseIntPipe, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/user.entity';
import { Order } from './order/order.entity';
import { OrderStatus } from './product-status.enum';
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

    @Post('/buy/:id')
    async buyProduct(@Param('id', ParseIntPipe) id: number,@Req() req):Promise<Order>{


        if(req.user.role === 'user'){
            return await this.productsService.buyProduct(id,req)
        }else{
            throw new ConflictException("only user can have order.")
        }
    }

    @Get('/orders')
    async getOrders(@Req() req){
        if(req.user.role === 'admin'){
            return await this.productsService.getAllOrders()
        }else{
            throw new ConflictException("only admin can accsess this route.")
        }

    }





}
