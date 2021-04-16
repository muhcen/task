import { Body, Controller, Get, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialsDto, UserCredentialsDto } from './dto/userCredentials.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/signUp')
    async signUp(@Body(ValidationPipe) userCredentialsDto : UserCredentialsDto):Promise<User>{
        return await this.authService.signUp(userCredentialsDto);
    }

    @Post('/logIn')
    async logIn(@Body(ValidationPipe) authCredentialsDto : AuthCredentialsDto):Promise<{token:string}>{
        return await this.authService.logIn(authCredentialsDto);
    }

    @UseGuards(AuthGuard())
    @Post('/test')
    async test(@Req() req){
        console.log(req)
    }
}
