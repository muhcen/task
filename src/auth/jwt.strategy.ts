import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ExtractJwt } from 'passport-jwt'
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "./user.repository";
import { JwtPayload } from "./jwt-payload.interface";
import { Strategy } from "passport-local";
import { User } from "./user.entity";
import { PassportStrategy } from "@nestjs/passport";


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


