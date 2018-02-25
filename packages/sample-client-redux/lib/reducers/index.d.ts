export { Store } from './Store';
export declare const reducers: {
    '@sample-stack/counter': (state: {
        value: number;
    }, action: {
        type: "@@sample-stack/INCREMENT_COUNTER";
        delta: number;
    } | {
        type: "@@sample-stack/RESET_COUNTER";
    } | ({
        type: "@@sample-stack/SAVE_COUNT_REQUEST";
    } & {
        request: {
            value: number;
        };
    }) | ({
        type: "@@sample-stack/SAVE_COUNT_SUCCESS";
    } & {
        request: {
            value: number;
        };
    } & {
        response: {};
    }) | ({
        type: "@@sample-stack/SAVE_COUNT_ERROR";
    } & {
        request: {
            value: number;
        };
    } & {
        error: Error;
    }) | ({
        type: "@@sample-stack/LOAD_COUNT_REQUEST";
    } & {
        request: null;
    }) | ({
        type: "@@sample-stack/LOAD_COUNT_SUCCESS";
    } & {
        request: null;
    } & {
        response: {
            value: number;
        };
    }) | ({
        type: "@@sample-stack/LOAD_COUNT_ERROR";
    } & {
        request: null;
    } & {
        error: Error;
    })) => {
        value: number;
    };
    '@sample-stack/isSaving': (state: boolean, action: {
        type: "@@sample-stack/INCREMENT_COUNTER";
        delta: number;
    } | {
        type: "@@sample-stack/RESET_COUNTER";
    } | ({
        type: "@@sample-stack/SAVE_COUNT_REQUEST";
    } & {
        request: {
            value: number;
        };
    }) | ({
        type: "@@sample-stack/SAVE_COUNT_SUCCESS";
    } & {
        request: {
            value: number;
        };
    } & {
        response: {};
    }) | ({
        type: "@@sample-stack/SAVE_COUNT_ERROR";
    } & {
        request: {
            value: number;
        };
    } & {
        error: Error;
    }) | ({
        type: "@@sample-stack/LOAD_COUNT_REQUEST";
    } & {
        request: null;
    }) | ({
        type: "@@sample-stack/LOAD_COUNT_SUCCESS";
    } & {
        request: null;
    } & {
        response: {
            value: number;
        };
    }) | ({
        type: "@@sample-stack/LOAD_COUNT_ERROR";
    } & {
        request: null;
    } & {
        error: Error;
    })) => boolean;
    '@sample-stack/isLoading': (state: boolean, action: {
        type: "@@sample-stack/INCREMENT_COUNTER";
        delta: number;
    } | {
        type: "@@sample-stack/RESET_COUNTER";
    } | ({
        type: "@@sample-stack/SAVE_COUNT_REQUEST";
    } & {
        request: {
            value: number;
        };
    }) | ({
        type: "@@sample-stack/SAVE_COUNT_SUCCESS";
    } & {
        request: {
            value: number;
        };
    } & {
        response: {};
    }) | ({
        type: "@@sample-stack/SAVE_COUNT_ERROR";
    } & {
        request: {
            value: number;
        };
    } & {
        error: Error;
    }) | ({
        type: "@@sample-stack/LOAD_COUNT_REQUEST";
    } & {
        request: null;
    }) | ({
        type: "@@sample-stack/LOAD_COUNT_SUCCESS";
    } & {
        request: null;
    } & {
        response: {
            value: number;
        };
    }) | ({
        type: "@@sample-stack/LOAD_COUNT_ERROR";
    } & {
        request: null;
    } & {
        error: Error;
    })) => boolean;
    '@sample-stack/error': (state: string, action: {
        type: "@@sample-stack/INCREMENT_COUNTER";
        delta: number;
    } | {
        type: "@@sample-stack/RESET_COUNTER";
    } | ({
        type: "@@sample-stack/SAVE_COUNT_REQUEST";
    } & {
        request: {
            value: number;
        };
    }) | ({
        type: "@@sample-stack/SAVE_COUNT_SUCCESS";
    } & {
        request: {
            value: number;
        };
    } & {
        response: {};
    }) | ({
        type: "@@sample-stack/SAVE_COUNT_ERROR";
    } & {
        request: {
            value: number;
        };
    } & {
        error: Error;
    }) | ({
        type: "@@sample-stack/LOAD_COUNT_REQUEST";
    } & {
        request: null;
    }) | ({
        type: "@@sample-stack/LOAD_COUNT_SUCCESS";
    } & {
        request: null;
    } & {
        response: {
            value: number;
        };
    }) | ({
        type: "@@sample-stack/LOAD_COUNT_ERROR";
    } & {
        request: null;
    } & {
        error: Error;
    })) => string;
};
