import { EntityRepository, Repository } from "typeorm";
import { OrderStatus } from "./product-status.enum";
import { Product } from "./product.entity";
import { ProductsCredentialsDto } from "./productsCredentials.dto";


@EntityRepository(Product)
export class ProductRepository extends Repository<Product>{

    async createProduct(productsCredentialsDto:ProductsCredentialsDto):Promise<Product>{
        const {title,describtion,price} = productsCredentialsDto;
        const product = new Product();
        product.title = title
        product.describtion = describtion;
        product.price = Number(price);

        try {
            await product.save();
            return product

        } catch (error) {
            return error.detail
        }        

    }


}
