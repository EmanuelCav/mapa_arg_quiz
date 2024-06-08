import { useState } from "react"

import Categories from "./components/showCategories/Categories"
import ArrowsCategories from "./components/showCategories/ArrowsCategories"

import { ShowCategoriesPropsType } from "@/types/categories.types"

const ShowCategories = ({ categories, categoryAction }: ShowCategoriesPropsType) => {

  const [min, setMin] = useState<number>(0)
  const [max, setMax] = useState<number>(8)

  return (
    <div className="h-1/2 w-full flex justify-evenly items-center flex-col">
      <ArrowsCategories categories={categories} max={max} min={min} setMax={setMax} setMin={setMin} />
      <Categories categories={categories} categoryAction={categoryAction} max={max} min={min} />
    </div>
  )
}

export default ShowCategories