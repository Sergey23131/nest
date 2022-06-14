import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class AuthUserDto{

    @ApiProperty({example: 'user@mail.com', description: 'mail'})
    @IsString({message: 'email must be string '})
    @IsEmail({}, {message: 'incorrect email'})
    readonly email: string;

    @ApiProperty({example: 'Password123', description: 'password'})
    @IsString({message: 'password must be string '})
    @Length(4, 15, {message: 'must be from 4 to 15 symbols'})
    readonly password: string;

}
