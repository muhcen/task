import { Controller, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
    constructor(
        @Inject('AUTH') private client: ClientProxy
    ){}
}
