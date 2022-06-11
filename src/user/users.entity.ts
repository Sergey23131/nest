import { AbstractEntity } from "../common/abstract.entity";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Entity()
export class User extends AbstractEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column({type: 'varchar', unique: true, nullable: false})
    email: string;

    @Column({type: 'varchar', nullable: false})
    password: string;

    @Column({type: 'varchar', nullable: false})
    city: string;

    @Column({type: 'boolean'})
    status: boolean;
}
