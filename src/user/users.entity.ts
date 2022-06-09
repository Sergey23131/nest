import { AbstractEntity } from "src/common/abstract.entity";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Entity()
export class User extends AbstractEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column({type: 'varchar', unique: true, allowNull: false})
    email: string;

    @Column({type: 'varchar', allowNull: false})
    password: string;

    @Column({type: 'varchar', allowNull: false})
    city: string;

    @Column({type: 'boolean'})
    status: boolean;
}
