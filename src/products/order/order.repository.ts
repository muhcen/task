import { User } from "src/auth/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { OrderStatus } from "../product-status.enum";
import { Product } from "../product.entity";
import { Order } from "./order.entity";


@EntityRepository(Order)
export class OrderRepository extends Repository<Order>{

}