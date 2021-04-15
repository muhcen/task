import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersController } from './users.controller';

@Module({
  imports :[
    ClientsModule.register([
      { name: 'AUTH', transport: Transport.TCP ,
      options:{
        port:8000,
        host:'localhost'
      }
    },
    ]),
  ],
  controllers: [UsersController]
})
export class UsersModule {}
