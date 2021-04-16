import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @MessagePattern('signUp')
    async signUp(data):Promise<User>{
        return await this.authService.signUp(data);
    }

    @MessagePattern('logIn')
    async logIn(data):Promise<{token:string}>{
        return await this.authService.logIn(data);
    }
}
