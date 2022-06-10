import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {CreateUserDto} from './dto/create.user.dto';
import {UserService} from "./user.service";


@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {
    }

    @ApiOperation({summary: 'Get all users'})
    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @ApiOperation({summary: 'Create new user'})
    @Post()
    createUser(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

}
