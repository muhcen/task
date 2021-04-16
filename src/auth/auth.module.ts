import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { JwtStrtegy } from './jwt.strategy';


@Module({
  imports: [
   PassportModule.register({defaultStrategy:'jwt'}),
  JwtModule.register({
    secret: 'topSecret51',
    signOptions:{
      expiresIn:90*24*60*60
    }
  }),
TypeOrmModule.forFeature([UserRepository]),
],
  controllers: [AuthController],
  providers: [
    JwtStrtegy,
    AuthService,
  ]
  ,
  exports:[JwtStrtegy,PassportModule]
})
export class AuthModule {}
