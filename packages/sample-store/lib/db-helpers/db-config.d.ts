import { Config } from 'knex';
export declare class DbConfig {
    private config;
    constructor(config: Config);
    getConfiguration(): Config;
}
