import { HelpType } from "./key.props";

export type GameStatisticsPropsType = {
    seconds: number;
    minutes: number;
    setSeconds: (seconds: number) => void;
    setMinutes: (minutes: number) => void;
    questions: number;
    numberQuestion: number;
    realSeconds: number; 
    realMinutes: number;
    isCorrect: boolean; 
    isIncorrect: boolean; 
    isFinish: boolean; 
    isPreFinish: boolean;
    helps: number;
    changeHelp: (type: HelpType) => void;
    isHelped: boolean;
    isGameError: boolean;
}

export type TimePropsType = {
    seconds: number;
    minutes: number;
    setSeconds: (seconds: number) => void;
    setMinutes: (minutes: number) => void;
    realSeconds: number; 
    realMinutes: number;
    isCorrect: boolean; 
    isIncorrect: boolean; 
    isFinish: boolean; 
    isPreFinish: boolean;
}

export type QuestionGameStatisticsPropsType = {
    questions: number, 
    numberQuestion: number
}

export type OptionPropsTypes = {
    option: string;
    nextQuestion: (value: string) => void;
    disabled: boolean;
}

export type SectionOptionsPropsTypes = {
    options: string[]
    nextQuestion: (value: string) => void;
    optionsHelped: string[];
    isHelped: boolean;
}

export type AnswerPropsType = {
    answer: boolean;
    correctAnswer: string;
    continueGame: () => void;
}

export type FinishPropsType = {
    seconds: number; 
    minutes: number; 
    corrects: number; 
    questions: number;
    showErrors: () => void; 
    continueHome : () => void;
    isGameError: boolean;
    isAdd: boolean;
    changeHelp: (type: HelpType) => void;
}

export type StatisticsFinishPropsType = {
    seconds: number; 
    minutes: number; 
    corrects: number; 
    questions: number;
}

export type ActionsFinishPropsType = {
    areErrors: boolean;
    showErrors: () => void; 
    continueHome : () => void;
}

export type ActionCategoryPropsType = {
    text: string; 
    changeAllCategory: (isSelect: boolean) => void;
    isSelect: boolean;
}

export type HelpsPropsType = {
    isAnswered: boolean; 
    helps: number; 
    changeHelp: (type: HelpType) => void;
}

export type ButtonFinishPropsType = {
    func: () => void;
    text: string;
}