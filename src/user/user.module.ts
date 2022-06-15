import {forwardRef, Module} from '@nestjs/common';
import {UserService} from './user.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from './users.model';
import {Post} from '../posts/posts.model';
import {UserController} from "./user.controller";
import {AuthModule} from "../auth/auth.module";

@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [
        SequelizeModule.forFeature([User, Post]),
        forwardRef(() => AuthModule)
    ],
    exports: [
        UserModule,
        UserService,
        AuthModule
    ]
})
export class UserModule {
}
