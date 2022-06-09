import {BeforeUpdate, Column, PrimaryGeneratedColumn} from "typeorm";

export class AbstractEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'bigint', default: Date.now()})
    createdAt: number;

    @Column({type: 'bigint', default: Date.now()})
    updatedAt: number;

    @BeforeUpdate()
    updateDateUpdate(){
        this.updatedAt=Date.now();
    }
}
