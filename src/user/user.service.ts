import {Injectable} from '@nestjs/common';
import {CreateUserDto} from "./dto/create.user.dto";
import {User} from './users.entity';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {

    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        return user;
    }

    async getAllUsers() {
        return await this.userRepository.find()
    }
}
