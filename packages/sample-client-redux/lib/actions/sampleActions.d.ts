import * as redux from 'redux';
import { Store } from '../reducers/index';
export declare type Q<T> = {
    request: T;
};
export declare type S<T> = {
    response: T;
};
export declare type E = {
    error: Error;
};
export declare type QEmpty = Q<null>;
export declare type QValue = Q<{
    value: number;
}>;
export declare type Action = {
    type: '@@sample-stack/INCREMENT_COUNTER';
    delta: number;
} | {
    type: '@@sample-stack/RESET_COUNTER';
} | ({
    type: '@@sample-stack/SAVE_COUNT_REQUEST';
} & QValue) | ({
    type: '@@sample-stack/SAVE_COUNT_SUCCESS';
} & QValue & S<{}>) | ({
    type: '@@sample-stack/SAVE_COUNT_ERROR';
} & QValue & E) | ({
    type: '@@sample-stack/LOAD_COUNT_REQUEST';
} & QEmpty) | ({
    type: '@@sample-stack/LOAD_COUNT_SUCCESS';
} & QEmpty & S<{
    value: number;
}>) | ({
    type: '@@sample-stack/LOAD_COUNT_ERROR';
} & QEmpty & E);
export declare const incrementCounter: (delta: number) => Action;
export declare const resetCounter: () => Action;
export declare type ApiActionGroup<_Q, _S> = {
    request: (q?: _Q) => Action & Q<_Q>;
    success: (s: _S, q?: _Q) => Action & Q<_Q> & S<_S>;
    error: (e: Error, q?: _Q) => Action & Q<_Q> & E;
};
export declare const saveCount: (request: {
    value: number;
}) => (dispatch: redux.Dispatch<Store.Sample>) => void;
export declare const loadCount: (request: null) => (dispatch: redux.Dispatch<Store.Sample>) => void;
