import Option from './Option'

import { SectionOptionsPropsTypes } from '../../../../types/juego.types'

const SectionOptions = ({ options, amountOptions, nextQuestion, isHelped, optionsHelped }: SectionOptionsPropsTypes) => {
    return (
        <div>
            {
                options.map((option: string, index: number) => {
                    return <Option option={option} disabled={isHelped ? optionsHelped.includes(option) : false}
                    nextQuestion={nextQuestion} key={index} amountOptions={amountOptions} />
                })
            }
        </div>
    )
}

export default SectionOptions