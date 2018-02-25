export declare type Api = {
    save(x: {
        value: number;
    }): Promise<null>;
    load(): (Promise<{
        value: number;
    }>);
};
export declare const api: Api;
