import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {CreateUserDto} from './dto/create.user.dto';
import {UserService} from "./user.service";
import {User} from './users.model';
import {JwtAuthGuard} from "../auth/jwt.auth.guard";


@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {
    }

    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status: 201, type: [User]})
   // @UseGuards(JwtAuthGuard)
    @Get()
    getAllUsers() {
        return this.userService.getAllUsers()
    }

    @ApiOperation({summary: 'Create new user'})
    @ApiResponse({status: 201, type: User})
    @Post()
    createUser(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto)
    }

    @ApiOperation({summary: 'Get one user by Id'})
    @ApiResponse({status: 200, type: User})
    @Get('/:id')
    getOneUserById(
        @Param('id') id: number
    ) {
        return this.userService.getOneUser(id)
    }
}
