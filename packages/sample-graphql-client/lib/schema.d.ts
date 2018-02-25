export declare type addCountMutationVariables = {
    amount: number;
};
export declare type addCountMutation = {
    addCount: {
        amount: number;
    } | null;
};
export declare type addPersonMutationVariables = {
    name: string;
    sex: string;
};
export declare type addPersonMutation = {
    addPerson: {
        id: string | null;
        name: string | null;
    } | null;
};
export declare type getCountQuery = {
    count: {
        amount: number;
    } | null;
};
export declare type getPersonQueryVariables = {
    id: string;
};
export declare type getPersonQuery = {
    getPerson: {
        id: string | null;
        name: string | null;
        sex: string | null;
        matches: Array<{
            id: string | null;
            name: string | null;
            sex: string | null;
            matches: Array<{
                id: string | null;
                name: string | null;
                sex: string | null;
                matches: Array<{
                    id: string | null;
                    name: string | null;
                    sex: string | null;
                } | null> | null;
            } | null> | null;
        } | null> | null;
    } | null;
};
export declare type getPersonsQuery = {
    persons: Array<{
        id: string | null;
        name: string | null;
    } | null> | null;
};
export declare type subscribeToCountSubscription = {
    subscribeToCount: {
        amount: number;
    } | null;
};
