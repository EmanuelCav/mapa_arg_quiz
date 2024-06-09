import { ButtonFinishPropsType } from '../../../../types/juego.types'

const ButtonFinish = ({ text, func }: ButtonFinishPropsType) => {
    return (
        <button onClick={func}>
            {text}
        </button>
    )
}

export default ButtonFinish