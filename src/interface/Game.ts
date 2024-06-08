import { Dispatch } from "react";
import { Action } from "../types/props.types";

export interface ICategory {
    category: string;
    isSelect: boolean;
    corrects: number;
    questions: number;
    isImage: boolean;
}

export interface IGame {
    questions: IQuestion[];
    loading: boolean,
    gameAction?: (allQuestions: IQuestion[], categories: ICategory[], amountQuesions: number, amountOptions: number) => void;
    dispatch?: Dispatch<Action>;
}

export interface IQuestion {
    question: string;
    image?: string;
    options: string[];
    category: string;
    text?: string;
    answer: string;
    isAnswer: boolean;
}