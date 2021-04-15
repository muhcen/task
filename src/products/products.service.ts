import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductsService {
    
    constructor(
    @InjectRepository(ProductRepository)
    private productRepository : ProductRepository ){}

    async getAllProducts():Promise<Product[]>{
        const products = await this.productRepository.find();
        return products
    }
}
