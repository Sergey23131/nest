import {Body, Controller, Get, Post} from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getAllUsers() {
        return {name: 'Vasya', age: 13, status: false};
    }

    @Post()
    createUser(@Body() userDto:CreateUserDto) {

    }
}
