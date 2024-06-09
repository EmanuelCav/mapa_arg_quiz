import { IQuestion } from '../../interface/Game'

const Question = ({ question }: { question: IQuestion }) => {
    return (
        <div className='h-1/2 bg-teal-500 border-2 border-white border-solid w-full py-4 px-2 rounded-sm'>
            <div className='flex-1 flex items-center justify-center w-full'>
                <p className='select-none text-white text-2xl'>{question.question}</p>
            </div>
            {
                question.image ? (
                    <div className='h-5/6 w-full flex items-center justify-center'>
                        <img src={question.image} alt="image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                ) : (
                    <div className='h-5/6 w-full flex items-center justify-center'>
                        <p className='select-none text-white text-3xl'>{question.text}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Question