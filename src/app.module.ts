import {Module} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import {UserController} from './user/user.controller';
import {UserModule} from './user/user.module';
import { User } from './user/users.model';
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
            models: [User],
            autoLoadModels: true,
        }), UserModule],
    controllers: [UserController],
    providers: [],
})
export class AppModule {
}
