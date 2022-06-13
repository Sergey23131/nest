import {Module} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import {UserController} from './user/user.controller';
import {UserModule} from './user/user.module';
import { User } from './user/users.model';
import { PostsController } from './posts/posts.controller';
import { PostModule } from './posts/posts.module';
import { Post } from './posts/posts.model';
import { FilesService } from './files/files.service';
import { FilesModule } from './files/files.module';
require('dotenv').config()

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: String(process.env.POSTGRES_PASSWORD),
            database: process.env.POSTGRES_DATABASE,
            models: [User,Post],
            autoLoadModels: true,
        }), UserModule, PostModule, FilesModule],
    controllers: [UserController, PostsController],
    providers: [FilesService],
})
export class AppModule {
}
