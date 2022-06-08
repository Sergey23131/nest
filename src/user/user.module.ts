import {Module} from '@nestjs/common';
import {UserService} from './user.service';
import sequelize from "sequelize";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from './users.model';
import {UserController} from "./user.controller";

@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [
        SequelizeModule.forFeature([User])
    ],
    exports: [
        UserService
    ]
})
export class UserModule {
}
