import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from "./auth.controller";
import {JwtModule} from "@nestjs/jwt";
import {UserService} from "../user/user.service";

@Module({
    providers: [AuthService],
    controllers: [AuthController],
    imports: [
        UserService,
        JwtModule.register({
                secret: 'secretWord',
                signOptions: {
                    expiresIn: '12h'
                }
            }
        )
    ],
    exports: [
        AuthService,
        JwtModule
    ]
})
export class AuthModule {
}
