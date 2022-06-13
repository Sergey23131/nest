import {
    DeepPartial,
    DeleteResult,
    FindConditions,
    FindManyOptions,
    FindOneOptions,
    Repository,
    SaveOptions,
    UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export class AbstractService<T> {
    protected _model: Repository<T>;

    constructor(model: Repository<T>) {
        this._model = model;
    }

    public async find(
        filter: FindManyOptions<T> & FindConditions<T> = {},
    ): Promise<T[]> {
        return this._model.find(filter);
    }

    public async findById(id: number, options: FindOneOptions = {}): Promise<T> {
        return this._model.findOne(id, options);
    }

    public async findOne(
        filter: FindConditions<T> = {},
        options: FindOneOptions<T> = {},
    ): Promise<T> {
        return this._model.findOne(filter, options);
    }

    public async create(
        doc: DeepPartial<T>,
        options: SaveOptions = {},
    ): Promise<T> {
        return this._model.save(doc, options);
    }

    public async update(
        id: number,
        updateDoc: QueryDeepPartialEntity<T>,
    ): Promise<UpdateResult> {
        return this._model.update(id, updateDoc);
    }

    public async updateMany(
        where: FindConditions<T>,
        updateDoc: QueryDeepPartialEntity<T>,
    ): Promise<UpdateResult> {
        return this._model.update(where, updateDoc);
    }

    public async delete(id: number): Promise<DeleteResult> {
        return this._model.delete(id);
    }
}
