import { ICategory } from "@/interface/Game"
import { CategoriesPropsType } from "@/types/categories.types"
import Category from "./components/Category"

const Categories = ({ categories, categoryAction, max, min }: CategoriesPropsType) => {
  return (
    <div className="w-full flex justify-between items-center flex-col bg-teal-400">
        {
            categories.map((category: ICategory, index: number) => {
                return <Category categories={categories} categoryAction={categoryAction} category={category} key={index} />
            }).slice(min, max)
        }
    </div>
  )
}

export default Categories