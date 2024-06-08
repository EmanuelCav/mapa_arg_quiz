import { selectCategory } from "@/helper/category"

import { CategoryPropsType } from "@/types/categories.types"

const Category = ({ category, categoryAction, categories }: CategoryPropsType) => {

  const changeCategory = () => {
    const newCategories = selectCategory(categories, category)
    categoryAction!(newCategories)
  }

  return (
    <div className="w-full p-3 flex justify-between items-center border border-white border-solid cursor-pointer hover:bg-teal-500 active:bg-teal-500" onClick={changeCategory}>
        <p className="text-lg text-white select-none">{category.category}</p>
        <input type="checkbox" checked={category.isSelect} className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={changeCategory} />
    </div>
  )
}

export default Category