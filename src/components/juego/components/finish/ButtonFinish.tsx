import { ButtonFinishPropsType } from '../../../../types/juego.types'

const ButtonFinish = ({ text, func }: ButtonFinishPropsType) => {
    return (
        <button onClick={func}
        className='p-4 w-full mt-4 bg-teal-500 rounded-md text-white text-xl hover:bg-teal-400 active:bg-teal-500'>
            {text}
        </button>
    )
}

export default ButtonFinish