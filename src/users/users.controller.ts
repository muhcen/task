import { Body, Controller, Inject, Post, ValidationPipe } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AuthCredentialsDto, UserCredential } from './dto/userCredential.dto';

@Controller('users')
export class UsersController {
    constructor(
        @Inject('AUTH') private client: ClientProxy
    ){}

    @Post('/signUp')
    signUp(@Body(ValidationPipe) userCredential : UserCredential){
        return this.client.send('signUp',userCredential) 
    }

    @Post('/logIn')
    logIn(@Body(ValidationPipe) authCredentialsDto : AuthCredentialsDto){
        return this.client.send('logIn',authCredentialsDto) 
    }
}
