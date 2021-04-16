import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService
    ){}

    async signUp(data):Promise<User>{
        return await this.userRepository.signUp(data);

    }

    async logIn(data):Promise<{token:string}>{
        const email = await this.userRepository.logIn(data);
        console.log(email)
        if(!email){
            throw new UnauthorizedException('Invalid credentials')
        }

        const payload:JwtPayload = {email};

        const token = await this.jwtService.sign(payload);

        return {token};
    }
}
