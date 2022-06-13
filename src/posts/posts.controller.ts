import {Body, Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "../user/dto/create.user.dto";
import {PostsService} from "./posts.service";
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {
    }


    @ApiOperation({summary: 'Get all posts'})
    //@ApiResponse({status: 200, type: [Post]})
    @Get()
    getAllPosts() {
        return this.postService.getAllPosts()
    }

    @ApiOperation({summary: 'Create new post'})
    //@ApiResponse({status: 201, type: Post})
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreateUserDto,
               @UploadedFile() image) {
        return this.postService.create(dto,image)
    }
}
