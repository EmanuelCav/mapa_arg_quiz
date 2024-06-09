import { FinishPropsType } from '../../types/juego.types'

import StatisticsFinish from './components/finish/StatisticsFinish'
import ActionsFinish from './components/finish/ActionsFinish'
import HelpAdd from './components/finish/HelpAdd'

const Finish = ({ seconds, minutes, corrects, questions, showErrors, continueHome, isGameError, isAdd, changeHelp }: FinishPropsType) => {
    return (
        <div>
            <div>
                {
                    isGameError ?
                        <div>
                            <p>¡Repaso realizado!</p>
                        </div>
                        :
                        <StatisticsFinish seconds={seconds} minutes={minutes} questions={questions} corrects={corrects} />
                }
                {
                    !isAdd ? <HelpAdd changeHelp={changeHelp} />
                        : <p>¡Ayudas entregadas!</p>
                }
                <ActionsFinish areErrors={corrects < questions} showErrors={showErrors} continueHome={continueHome} />
            </div>
        </div>
    )
}

export default Finish