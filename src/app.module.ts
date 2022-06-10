import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";

require('dotenv').config()


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: String(process.env.POSTGRES_PASSWORD),
            database: process.env.POSTGRES_DATABASE,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            migrationsRun: true,
            migrations: ['dist/database/migrations/*.js'],
            cli: {migrationsDir: 'database/migrations'}
        }), UserModule],
    controllers: [],
    providers: [],
})
export class AppModule {

}
