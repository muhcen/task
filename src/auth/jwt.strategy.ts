import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from 'passport-jwt'
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy } from "passport-local";
import { UserRepository } from "./user.repository";
import { JwtPayload } from "./jwt-payload.interface";
import { User } from "./user.entity";


@Injectable()
export class JwtStrtegy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)  
    private userRepository: UserRepository) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'topSecret51',
        });
  }

  async validate(jwtPayload:JwtPayload): Promise<User> {

    const {email}=jwtPayload;
    const user = await this.userRepository.findOne({email});


    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}


