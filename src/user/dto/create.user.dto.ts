import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example:'user@mail.com',description:'mail'})
    readonly email: string;

    @ApiProperty({example:'Password123',description:'password'})
    readonly passport: string;

    @ApiProperty({example:'John21',description:'name of user'})
    readonly username: string;

    @ApiProperty({example:'Kiev',description:'city of user'})
    readonly city: string;

    @ApiProperty({example:'true',description:'is user in study or not'})
    readonly status: string;


}
