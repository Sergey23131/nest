import {Controller, Post, Body} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {AuthUserDto} from "./dto/auth.user.dto";
import {CreateUserDto} from "../user/dto/create.user.dto";

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthController) {
    }

    @Post('/login')
    login(@Body() userDto: AuthUserDto) {
        return this.authService.login(userDto)
    }

    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }

}
