import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { HelpType } from "../types/key.props";
import { ICategory } from "./Game";

export interface IUser {
    amountOptions: number;
    amountQuestions: number;
    helps: number;
    categories: ICategory[];
    optionsAction?: (optionData: IOptionUser, router: AppRouterInstance) => void;
    categoryAction?: (category: ICategory[]) => void;
    userAction?: (data: IUser) => void;
    categoryAllAction?: (isSelect: boolean) => void;
    helpsAction?: (type: HelpType) => void;
}

export interface IOptionUser {
    amountOptions: number;
    amountQuestions: number;
}