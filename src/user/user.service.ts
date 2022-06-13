import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractService } from '../common/abstract.service';

@Injectable()
export class UserService extends AbstractService<User> {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {
        super(userRepository);
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.create(dto);
        return user;
    }

    async getAllUsers() {
        return await this.userRepository.find();
    }
}
