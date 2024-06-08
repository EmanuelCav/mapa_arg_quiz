import { ICategory } from "@/interface/Game";

export type ShowCategoriesPropsType = {
    categoryAction: (category: ICategory[]) => void;
    categories: ICategory[];
}

export type CategoriesPropsType = {
    categoryAction: (category: ICategory[]) => void;
    categories: ICategory[];
    max: number;
    min: number;
}

export type ArrowsCategoriesPropsType = {
    max: number;
    min: number;
    categories: ICategory[];
    setMax: (max: number) => void;
    setMin: (min: number) => void;
}

export type CategoryPropsType = {
    category: ICategory;
    categoryAction: (category: ICategory[]) => void;
    categories: ICategory[];
}

export type ButtonActionCategoryPropsType = {
    text: string;
    isSelect: boolean;
    changeAllCategory: (isSelect: boolean) => void;
}