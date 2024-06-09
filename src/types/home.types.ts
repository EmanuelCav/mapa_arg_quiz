import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { ICategory, IQuestion } from "@/interface/Game";
import { NextRouter } from "next/router";

export type ButtonMenuPropsType = {
    text: string;
    func: (route: string) => void;
    route: string;
}

export type MenuPropsType = {
    router: AppRouterInstance;
    categories: ICategory[];
    amountOptions: number;
    amountQuestions: number;
    dispatch: any;
    gameAction: (allQuestions: IQuestion[], categories: ICategory[], amountQuesions: number, amountOptions: number, router: AppRouterInstance) => void;
}