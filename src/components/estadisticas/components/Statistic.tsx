import { ICategory } from "@/interface/Game"

const Statistic = ({ category }: { category: ICategory }) => {
    return (
        <div className="p-2 bg-teal-500 border border-white border-solid">
            <p className="text-xl text-white">{category.category}</p>
            <p className="text-lg text-white">Cantidad de preguntas: {category.questions}</p>
            <p className="text-lg text-white">Correctas: {category.corrects} ({category.questions > 0 ? ((100 * category.corrects) / category.questions).toFixed(2) : 0}%)</p>
        </div>
    )
}

export default Statistic