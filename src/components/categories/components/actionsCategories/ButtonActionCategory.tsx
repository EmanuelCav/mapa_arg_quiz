import { ButtonActionCategoryPropsType } from "@/types/categories.types"

const ButtonActionCategory = ({ text, changeAllCategory, isSelect }: ButtonActionCategoryPropsType) => {
    return (
        <button className='p-4 bg-teal-500 w-64 rounded-md text-white text-xl hover:bg-teal-400 active:bg-teal-500 select-none' onClick={() => changeAllCategory(isSelect)}>
            {text}
        </button>
    )
}

export default ButtonActionCategory