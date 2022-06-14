import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {AuthUserDto} from "./dto/auth.user.dto";
import * as bcrypt from 'bcryptjs'
import {CreateUserDto} from "../user/dto/create.user.dto";
import {User} from 'src/user/users.model';

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
                private jwtService: JwtService) {
    }

    async registration(userDto: CreateUserDto) {
        const findUser = await this.userService.getUserByEmail(userDto.email)
        if (findUser) {
            throw new HttpException('user with this email already exist', HttpStatus.BAD_REQUEST)
        }

        const hashPassword = await bcrypt.hash(userDto.password, 6)
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user)
    }

    async login(userDto: AuthUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    private generateToken(user: User) {
        const payload = {email: user.email, id: user.id, name: user.username}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: AuthUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email)
        const passwordEqual = await bcrypt.compare(user.password, user.password)
        if (user && passwordEqual) {
            return user
        }
        throw new UnauthorizedException({message: 'wrong email or password'})
    }
}
