import * as Knex from 'knex';
import { DbConfig } from './db-config';
export declare abstract class AbstractRepository {
    dbConfig: DbConfig;
    protected abstract tableName: string;
    getDb(): Knex;
    getTable(): Knex.QueryBuilder;
}
