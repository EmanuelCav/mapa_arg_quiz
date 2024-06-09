import Option from './Option'

import { SectionOptionsPropsTypes } from '../../../../types/juego.types'

const SectionOptions = ({ options, nextQuestion, isHelped, optionsHelped }: SectionOptionsPropsTypes) => {
    return (
        <div className='flex h-full justify-around items-center flex-col w-1/2 p-2'>
            {
                options.map((option: string, index: number) => {
                    return <Option option={option} disabled={isHelped ? optionsHelped.includes(option) : false}
                    nextQuestion={nextQuestion} key={index} />
                })
            }
        </div>
    )
}

export default SectionOptions