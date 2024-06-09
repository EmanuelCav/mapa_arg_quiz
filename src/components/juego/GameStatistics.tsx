import Time from './components/gameStatistics/Time'
import QuestionGameStatistics from './components/gameStatistics/QuestionGameStatistics'
import Helps from './components/gameStatistics/Helps'

import { GameStatisticsPropsType } from '../../types/juego.types'

const GameStatistics = ({ seconds, minutes, setSeconds, setMinutes, numberQuestion, questions, realSeconds, realMinutes, isCorrect, isIncorrect, isFinish, isPreFinish, helps, changeHelp, isHelped, isGameError }: GameStatisticsPropsType) => {
    return (
        <>
            {
                isGameError ?
                    <div>
                        <Helps isAnswered={isCorrect || isIncorrect || isHelped || helps === 0} helps={helps} changeHelp={changeHelp} />
                    </div> :
                    <div>
                        <Time minutes={minutes} seconds={seconds} setSeconds={setSeconds} setMinutes={setMinutes} realSeconds={realSeconds} realMinutes={realMinutes}
                            isCorrect={isCorrect} isIncorrect={isIncorrect} isFinish={isFinish} isPreFinish={isPreFinish}
                        />
                        <Helps isAnswered={isCorrect || isIncorrect || isHelped || helps === 0} helps={helps} changeHelp={changeHelp} />
                        <QuestionGameStatistics questions={questions} numberQuestion={numberQuestion} />
                    </div>
            }
        </>
    )
}

export default GameStatistics