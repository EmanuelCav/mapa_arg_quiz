import ResponseAnswer from './components/answer/ResponseAnswer'

import { AnswerPropsType } from '../../types/juego.types'

const Answer = ({ answer, correctAnswer, continueGame }: AnswerPropsType) => {
    return (
        <div onClick={continueGame}>
            <ResponseAnswer answer={answer} />
            {
                !answer &&
                <p>
                    Respuesta correcta: {correctAnswer}
                </p>
            }
            <p>Toca para continuar</p>
        </div>
    )
}

export default Answer