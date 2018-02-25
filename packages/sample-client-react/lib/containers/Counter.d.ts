/// <reference types="react" />
import { Store } from '@sample-stack/client-redux';
export declare type CounterOwnProps = {
    label: string;
    store?: Store.Sample;
};
export declare const Counter: React.ComponentClass<CounterOwnProps>;
