import { ArrowsCategoriesPropsType } from "@/types/categories.types"
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const ArrowsCategories = ({ categories, max, min, setMin, setMax }: ArrowsCategoriesPropsType) => {

    const left = () => {
        if (min < 8) {
            return
        }
        setMin(min - 8)
        setMax(max - 8)
    }

    const rigth = () => {
        if (max >= categories.length) {
            return
        }
        setMin(min + 8)
        setMax(max + 8)
    }

    return (
        <div className="w-full items-center justify-evenly flex">
            <IoIosArrowDropleft onClick={left} className="text-teal-500 cursor-pointer" fontSize={40} />
            <p className="text-xl text-teal-500 select-none">{max / (8)}/{categories.length / (max - min)}</p>
            <IoIosArrowDropright onClick={rigth} className="text-teal-500 cursor-pointer" fontWeight={900} fontSize={40} />
        </div>
    )
}

export default ArrowsCategories