import { StatisticsFinishPropsType } from '../../../../types/juego.types'

const StatisticsFinish = ({ seconds, minutes, questions, corrects }: StatisticsFinishPropsType) => {
    return (
        <div>
            <p>Cantidad de preguntas: {questions}</p>
            <p>Respuestas correctas: {corrects}</p>
            <p>Tiempo: {minutes < 10 ? `0${minutes}` : `${minutes}`}:{seconds < 10 ? `0${seconds}` : `${seconds}`}</p>
        </div>
    )
}

export default StatisticsFinish