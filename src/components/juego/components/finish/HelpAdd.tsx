import { TfiVideoClapper } from "react-icons/tfi";

import { HelpType } from '../../../../types/key.props'

const HelpAdd = ({ changeHelp }: { changeHelp: (type: HelpType) => void }) => {
    return (
        <button onClick={() => changeHelp('add')}
        className='p-4 w-full mt-4 bg-teal-500 rounded-md text-white text-xl hover:bg-teal-400 active:bg-teal-500'>
            <div className='mr-2 flex justify-center items-center'>
                <p className='mr-2 text-xl text-white'>Ayudas</p>
                <p className='mr-2 text-xl text-white'>x2</p>
                <TfiVideoClapper color="#ffffff" size={24} />
            </div>
        </button>
    )
}

export default HelpAdd