import { OptionPropsTypes } from '../../../../types/juego.types'

const Option = ({ option, nextQuestion, disabled }: OptionPropsTypes) => {

    return (
        <button onClick={() => nextQuestion(option)} disabled={disabled}
        className={disabled ? 'select-none flex justify-center items-center flex-1 my-2 p-4 bg-slate-400 w-full rounded-md text-white text-2xl'
            : 'select-none flex justify-center items-center flex-1 my-2 p-4 bg-teal-500 w-full rounded-md text-white text-2xl hover:bg-teal-400 active:bg-teal-500'}>
            {option}
        </button>
    )
}

export default Option