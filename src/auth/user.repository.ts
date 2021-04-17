import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";
import * as bcrypt from "bcrypt";
import { NotAcceptableException, NotFoundException } from "@nestjs/common";
import { AuthCredentialsDto, UserCredentialsDto } from "./dto/userCredentials.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async signUp(userCredentialsDto : UserCredentialsDto):Promise<User>{

        const {email,name,password,role} = userCredentialsDto;
        const user = new User();
        const salt = await bcrypt.genSalt();
        user.salt = salt;
        user.email = email;
        user.name = name;
        user.password = await this.hashPassword(password,salt);
        user.role = role;



        try {
            await user.save();
            return user
        } catch (error) {
            return error.detail
        }
    }

    async logIn(authCredentialsDto:AuthCredentialsDto){

        const {password,email} = authCredentialsDto

        const user = await this.findOne({email});

        if(user && (await user.validatePassword(password))){
            return user.email
        }else{
            return null
        }
    }

    async hashPassword(password,salt){
        return await bcrypt.hash(password,salt)
    }
}