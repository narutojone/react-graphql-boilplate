import { AbstractRepository } from '../db-helpers';
import { ICounterRepository } from './interfaces';
import { ICount } from '../models';
export declare class CounterRepository extends AbstractRepository implements ICounterRepository {
    protected tableName: string;
    getById(id: number): Promise<ICount>;
    find(filter: string, pageNumber?: number, count?: number): Promise<ICount[]>;
    create(dto: ICount): Promise<ICount>;
    update(dto: ICount): Promise<ICount>;
    getCount(): Promise<ICount>;
    addCount(amount: any): Promise<void>;
}
