import { QuestionGameStatisticsPropsType } from '../../../../types/juego.types'

const QuestionGameStatistics = ({ questions, numberQuestion }: QuestionGameStatisticsPropsType) => {
    return (
        <p className='text-xl text-teal-500 select-none'>{numberQuestion}/{questions}</p>
    )
}

export default QuestionGameStatistics