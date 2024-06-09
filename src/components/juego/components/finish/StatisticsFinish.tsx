import { StatisticsFinishPropsType } from '../../../../types/juego.types'

const StatisticsFinish = ({ seconds, minutes, questions, corrects }: StatisticsFinishPropsType) => {
    return (
        <div className='w-full flex items-center flex-col justify-center'>
            <p className='text-xl text-teal-500'>Cantidad de preguntas: {questions}</p>
            <p className='text-xl text-teal-500'>Respuestas correctas: {corrects}</p>
            <p className='text-xl text-teal-500'>Tiempo: {minutes < 10 ? `0${minutes}` : `${minutes}`}:{seconds < 10 ? `0${seconds}` : `${seconds}`}</p>
        </div>
    )
}

export default StatisticsFinish