export declare namespace Store {
    type Counter = {
        value: number;
    };
    type Sample = {
        '@sample-stack/counter': Counter;
        '@sample-stack/isSaving': boolean;
        '@sample-stack/isLoading': boolean;
        '@sample-stack/error': string;
    };
}
