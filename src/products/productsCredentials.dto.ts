import { IsNumber, IsString, MinLength } from "class-validator"


export class ProductsCredentialsDto {

    @IsString()
    @MinLength(8)
    title:string

    @IsString()
    @MinLength(20)
    describtion : string
    
    @IsString()
    price:string

}