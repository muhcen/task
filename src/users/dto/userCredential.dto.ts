import { IsEnum, IsString, MaxLength, MinLength } from "class-validator";
import { UserRole } from "../user-role.enum";


export class UserCredential{

    @MinLength(4)
    @MaxLength(20)
    @IsString()
    name: string
    @MinLength(8)
    @MaxLength(20)
    @IsString()
    email: string
    @MinLength(8)
    @MaxLength(20)
    @IsString()
    password: string
    @IsString()
    role: UserRole
} 


export class AuthCredentialsDto{
    @MinLength(8)
    @MaxLength(20)
    @IsString()
    email: string
    @MinLength(8)
    @MaxLength(20)
    @IsString()
    password: string
}