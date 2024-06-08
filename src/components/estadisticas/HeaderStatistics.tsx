import { ICategory } from "@/interface/Game"

import { totalCorrects, totalQuestions } from "@/helper/statistics"

const HeaderStatistics = ({ categories }: { categories: ICategory[] }) => {
    return (
        <div className="h-1/16 p-2 bg-teal-500">
            <p className="text-xl text-white">Cantidad de preguntas: {totalQuestions(categories)}</p>
            <p className="text-xl text-white">Correctas: {totalCorrects(categories)} ({totalQuestions(categories) > 0 ? ((100 * totalCorrects(categories)) / totalQuestions(categories)).toFixed(2) : 0}%)</p>
        </div>
    )
}

export default HeaderStatistics