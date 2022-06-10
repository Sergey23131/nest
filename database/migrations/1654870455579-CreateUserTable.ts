import {getRepository, MigrationInterface, QueryRunner, Repository, Table} from "typeorm";
import {User} from "../../src/user/users.entity";

export class CreateUserTable1654870455579 implements MigrationInterface {
    private repository: Repository<User>

/*    constructor() {
        this.repository = getRepository(User)
    }*/

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'User',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'password',
                        type: 'varchar'
                    },
                    {
                        name: 'city',
                        type: 'varchar'
                    },
                    {
                        name: 'status',
                        type: 'boolean'
                    },
                    {
                        name: 'createdAt',
                        type: 'bigint',
                        default: Date.now()
                    },
                    {
                        name: 'updatedAt',
                        type: 'bigint',
                        default: Date.now()
                    },


                ]
            })
        )
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.repository.metadata.tableName)
    }

}
