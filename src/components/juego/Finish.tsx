import { FinishPropsType } from '../../types/juego.types'

import StatisticsFinish from './components/finish/StatisticsFinish'
import ActionsFinish from './components/finish/ActionsFinish'
import HelpAdd from './components/finish/HelpAdd'

const Finish = ({ seconds, minutes, corrects, questions, showErrors, continueHome, isGameError, isAdd, changeHelp }: FinishPropsType) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center" style={{ backgroundColor: 'rgba(93, 193, 185, 0.5)' }}>
            <div className='flex w-2/3 justify-center bg-white items-center border-2 bg-teal-500 border-solid p-4 flex-col'>
                {
                    isGameError ?
                        <div className='flex items-center w-full justify-evenly'>
                            <p className='text-center text-xl text-teal-500'>¡Repaso realizado!</p>
                        </div>
                        :
                        <StatisticsFinish seconds={seconds} minutes={minutes} questions={questions} corrects={corrects} />
                }
                {/* {
                    !isAdd ? <HelpAdd changeHelp={changeHelp} />
                        : <p className='text-center text-xl text-teal-500'>¡Ayudas entregadas!</p>
                } */}
                <ActionsFinish areErrors={corrects < questions} showErrors={showErrors} continueHome={continueHome} />
            </div>
        </div>
    )
}

export default Finish