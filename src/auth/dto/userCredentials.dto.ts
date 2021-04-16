import { IsString, MaxLength, MinLength } from "class-validator";
import { UserRole } from "../user-role.enum";


export class UserCredentialsDto {
    @IsString()
    @MinLength(8)
    @MaxLength(30)
    email: string
    @IsString()
    @MinLength(4)
    @MaxLength(30)
    name:string
    @IsString()
    @MinLength(8)
    @MaxLength(50)
    password: string
    @IsString()
    role: UserRole
}

export class AuthCredentialsDto{
    email: string
    @IsString()
    @MinLength(4)
    @MaxLength(30)
    @IsString()
    @MinLength(8)
    @MaxLength(50)
    password: string
}