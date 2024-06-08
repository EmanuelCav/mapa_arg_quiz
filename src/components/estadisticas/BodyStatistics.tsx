import Statistic from "./components/Statistic"

import { ICategory } from "@/interface/Game"

const BodyStatistics = ({ categories }: { categories: ICategory[] }) => {
    return (
        <div className="overflow-auto h-3/4">
            {
                categories.map((category: ICategory) => {
                    return <Statistic category={category} key={category.category} />
                })
            }
        </div>
    )
}

export default BodyStatistics