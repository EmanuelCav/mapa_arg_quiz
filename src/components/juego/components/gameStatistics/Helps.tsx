import { IoMdHelp } from "react-icons/io";

import { HelpsPropsType } from '../../../../types/juego.types'

const Helps = ({ isAnswered, helps, changeHelp }: HelpsPropsType) => {
    return (
        <button className='py-2 px-6 w-24 cursor-pointer bg-teal-500 rounded-md text-white text-xl flex justify-around items-center border-solid border-white border mt-2 hover:bg-teal-400 active:bg-teal-500' disabled={isAnswered} onClick={() => changeHelp('help')}>
            <p className="text-white text-xl">{helps}</p>
            <IoMdHelp size={24} />
        </button>
    )
}

export default Helps