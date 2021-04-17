import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Connection } from 'typeorm';
import { Order } from './order/order.entity';
import { OrderRepository } from './order/order.repository';
import { OrderStatus } from './product-status.enum';
import { Product } from './product.entity';
import { ProductRepository } from './products.repository';
import { ProductsCredentialsDto } from './productsCredentials.dto';

@Injectable()
export class ProductsService {
    
    constructor(
    @InjectRepository(ProductRepository)
    private productRepository : ProductRepository ,
    @InjectRepository(OrderRepository)
    private orderRepository : OrderRepository ,
    ){}

    async getAllProducts():Promise<Product[]>{
        const products = await this.productRepository.find();
        return products
    }

    async createProduct(productsCredentialsDto:ProductsCredentialsDto):Promise<Product>{
        return this.productRepository.createProduct(productsCredentialsDto)
    }

    async buyProduct(id:number,req):Promise<Order>{
        const product = await this.productRepository.findOne({id})
        if(!product){
            throw new NotFoundException('product with this number does not exist')
        }
        const user : User = req.user

        const order = new Order();

        order.id_product = product
        order.user = user;
        order.status = OrderStatus.OPEN

        try {

            await order.save();
            return order;

        } catch (error) {
            return error.detail
        }

    }

    async getAllOrders():Promise<Order[]>{
        const orders = await this.orderRepository.find()
        return orders
    } 

}
