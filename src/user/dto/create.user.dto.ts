import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean, IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.com', description: 'mail'})
    @IsString({message: 'email must be string '})
    @IsEmail({}, {message: 'incorrect email'})
    readonly email: string;

    @ApiProperty({example: 'Password123', description: 'password'})
    @IsString({message: 'password must be string '})
    @Length(4, 15, {message: 'must be from 4 to 15 symbols'})
    readonly password: string;

    @ApiProperty({example: 'John21', description: 'name of user'})
    @IsString({message: 'username must be string '})
    readonly username: string;

    @ApiProperty({example: 'Kiev', description: 'city of user'})
    @IsString({message: 'city must be string '})
    readonly city: string;

    @ApiProperty({example: 'true', description: 'is user in study or not'})
    @IsBoolean({message: 'status must be boolean'})
    readonly status: string;


}
