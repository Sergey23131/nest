import {Injectable} from '@nestjs/common';
import {CreateUserDto} from "./dto/create.user.dto";
import {InjectModel} from "@nestjs/sequelize";
import {User} from './users.model';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userRepository: typeof User) {

    }

    async getAllUsers() {
        return this.userRepository.findAll();
    }

    async getOneUser(id: number) {
        return this.userRepository.findOne({where: {id}})
    }

    async getUserByEmail(email: string) {
        return this.userRepository.findOne({where: {email}})
    }

    async createUser(dto: CreateUserDto) {
        return this.userRepository.create(dto)
    }

}
