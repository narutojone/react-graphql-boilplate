/// <reference types="react" />
import * as React from 'react';
export interface ICounterProps {
    label: string;
    counter: {
        value: number;
    };
    isSaving: boolean;
    isLoading: boolean;
    error: string;
    increment: (n: number) => void;
    save: (n: number) => void;
    load: () => void;
}
export interface ICounterState {
}
export declare class CounterComponent extends React.Component<ICounterProps, ICounterState> {
    private _onClickIncrement;
    private _onClickSave;
    private _onClickLoad;
    render(): JSX.Element;
}
