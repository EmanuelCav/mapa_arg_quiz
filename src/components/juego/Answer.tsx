import ResponseAnswer from './components/answer/ResponseAnswer'

import { AnswerPropsType } from '../../types/juego.types'

const Answer = ({ answer, correctAnswer, continueGame }: AnswerPropsType) => {
    return (
        <div onClick={continueGame} style={{ height: '42%' }}
            className={answer ? 'cursor-pointer w-full flex justify-around items-center flex-col bg-white p-2 border-4 border-solid border-green-500'
                : 'cursor-pointer w-full flex justify-around items-center flex-col bg-white p-2 border-2 border-solid border-red-500'
            }
        >
            <ResponseAnswer answer={answer} />
            {
                !answer &&
                <p className='text-red-500 text-xl select-none'>
                    Respuesta correcta: {correctAnswer}
                </p>
            }
            <p className={answer ? 'text-green-500 text-xl select-none' : 'text-red-500 text-xl select-none'}>Toca para continuar</p>
        </div>
    )
}

export default Answer