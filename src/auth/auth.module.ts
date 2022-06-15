import {forwardRef, Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from "./auth.controller";
import {JwtModule} from "@nestjs/jwt";
import {UserService} from "../user/user.service";
import {UserModule} from "../user/user.module";

@Module({
    providers: [AuthService],
    controllers: [AuthController],
    imports: [
        forwardRef(() => UserModule),
        JwtModule.register({
                secret: 'secretWord',
                signOptions: {
                    expiresIn: '12h'
                }
            }
        ),
        UserService
    ],
    exports: [
        AuthModule,
        JwtModule
    ]
})
export class AuthModule {
}
