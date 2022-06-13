import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({example: 'kiev', description: 'city'})
    readonly city: string;

    @ApiProperty({example: 'user@mail.com', description: 'mail'})
    readonly email: string;

    @ApiProperty({example: 'Password123', description: 'password'})
    readonly passport: string;
}
