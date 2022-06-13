import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import {SequelizeModule} from "@nestjs/sequelize";
import { Post } from './posts.model';
import { PostsController } from './posts.controller';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [
    SequelizeModule.forFeature([Post])
  ],
  exports: [
    PostsService
  ]


})
export class PostModule {}
