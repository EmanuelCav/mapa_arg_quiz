import { QuestionGameStatisticsPropsType } from '../../../../types/juego.types'

const QuestionGameStatistics = ({ questions, numberQuestion }: QuestionGameStatisticsPropsType) => {
    return (
        <p>{numberQuestion}/{questions}</p>
    )
}

export default QuestionGameStatistics