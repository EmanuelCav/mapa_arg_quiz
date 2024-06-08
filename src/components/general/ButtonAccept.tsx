import { ButtonAcceptPropsType } from '@/types/props.types'

const ButtonAccept = ({ text, isCategory, func }: ButtonAcceptPropsType) => {
    return (
        <div className='h-1/6 flex justify-center items-center'>
            <button className='p-4 bg-teal-500 w-64 rounded-md text-white text-xl hover:bg-teal-400 active:bg-teal-500' onClick={func}>
                {text}
            </button>
        </div>
    )
}

export default ButtonAccept