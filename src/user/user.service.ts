import {Injectable} from '@nestjs/common';
import {CreateUserDto} from "./dto/create.user.dto";
import {InjectModel} from "@nestjs/sequelize";
import {User} from './users.model';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userRepository: typeof User) {

    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        return user;
    }

}
