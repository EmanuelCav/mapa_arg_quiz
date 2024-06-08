import { SetStateAction } from "react";

import { IOptionUser } from "@/interface/User";

export type AmountQuestionsPropsType = {
    amountQuestions: number;
    setOptionsUser: (optionsUser: SetStateAction<IOptionUser>) => void;
}

export type AmountOptionsPropsType = {
    amountOptions: number;
    setOptionsUser: (optionsUser: SetStateAction<IOptionUser>) => void;
}

export type ButtonOptionsPropsType = {
    text: string;
    amountOptions: number;
    func: (number: number) => void;
}