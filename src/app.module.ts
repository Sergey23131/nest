import {Module} from '@nestjs/common';
import {UserController} from './user/user.controller';
import {UserModule} from './user/user.module';
import {User} from './user/users.entity';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            migrationsRun: true,
            migrations: ['dist/database/migrations/*.js'],
         //   cli: {migrationsDir: 'database/migrations'}
        }), UserModule],
    controllers: [UserController],
    providers: [],
})
export class AppModule {

}
