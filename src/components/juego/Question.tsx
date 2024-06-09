import Image from 'next/image';

import { IQuestion } from '../../interface/Game'

const Question = ({ question }: { question: IQuestion }) => {
    return (
        <div>
            <div>
                <p>{question.question}</p>
            </div>
            {
                question.image ? (
                    <div>
                        <Image src={question.image} alt='image' />
                    </div>
                ) : (
                    <div>
                        <p>
                            {question.text}
                        </p>
                    </div>
                )
            }
        </div>
    )
}

export default Question