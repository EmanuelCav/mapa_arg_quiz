export type Action = {
    type: string;
    payload: any;
}

export type ButtonAcceptPropsType = {
    text: string;
    func: () => void;
    isCategory: boolean;
}