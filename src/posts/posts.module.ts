import {Module} from '@nestjs/common';
import {PostsService} from './posts.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Post} from './posts.model';
import {PostsController} from './posts.controller';
import {FilesService} from "../files/files.service";

@Module({
    providers: [PostsService, FilesService],
    controllers: [PostsController],
    imports: [
        SequelizeModule.forFeature([Post]),
        FilesService
    ],
    exports: [
        PostsService
    ]


})
export class PostModule {
}
