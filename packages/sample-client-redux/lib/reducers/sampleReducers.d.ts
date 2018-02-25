import { Action } from '../actions';
import { Store } from './Store';
export declare const reducers: {
    '@sample-stack/counter': (state: Store.Counter, action: Action) => Store.Counter;
    '@sample-stack/isSaving': (state: boolean, action: Action) => boolean;
    '@sample-stack/isLoading': (state: boolean, action: Action) => boolean;
    '@sample-stack/error': (state: string, action: Action) => string;
};
