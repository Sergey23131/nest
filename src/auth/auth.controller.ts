import {Controller, Post, Body} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {AuthUserDto} from "./dto/auth.user.dto";
import {CreateUserDto} from "../user/dto/create.user.dto";
import {AuthService} from "./auth.service";

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Post('/login')
    loginUser(@Body() userDto: AuthUserDto) {
        return this.authService.login(userDto)
    }

    @Post('/registration')
    registrationUser(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }

}
