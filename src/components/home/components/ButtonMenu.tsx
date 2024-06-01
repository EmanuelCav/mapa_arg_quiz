import { ButtonMenuPropsType } from '@/types/home.types'

const ButtonMenu = ({ text, func, route }: ButtonMenuPropsType) => {
    return (
        <button className='p-6 bg-teal-500 w-64 rounded-md text-white text-xl hover:bg-teal-400 active:bg-teal-500' onClick={() => func(route)}>
            {text}
        </button>
    )
}

export default ButtonMenu