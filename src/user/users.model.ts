import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Post} from "src/posts/posts.model";

interface UserCreationAttrs {
    email: string;
    password: string;
    username: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({example: '1', description: 'Unique indent'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'asds12@gmail.com', description: 'Email of user'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'Password123', description: 'Password of user'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'Username', description: 'Name of user'})
    @Column({type: DataType.STRING, allowNull: false})
    username: string;

    @ApiProperty({example: 'Kiev', description: 'City of user'})
    @Column({type: DataType.STRING, allowNull: false})
    city: string;

    @ApiProperty({example: 'true', description: 'Is user in study on not'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    status: boolean;

    @HasMany(() => Post)
    post: Post[];
}
