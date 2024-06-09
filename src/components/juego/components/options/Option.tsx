import { OptionPropsTypes } from '../../../../types/juego.types'

const Option = ({ option, amountOptions, nextQuestion, disabled }: OptionPropsTypes) => {

    return (
        <button onClick={() => nextQuestion(option)} disabled={disabled}>
            {option}
        </button>
    )
}

export default Option