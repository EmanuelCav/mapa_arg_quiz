import SectionOptions from './components/options/SectionOptions'

import { SectionOptionsPropsTypes } from '../../types/juego.types'

const Options = ({ options, amountOptions, nextQuestion, optionsHelped, isHelped }: SectionOptionsPropsTypes) => {
    return (
        <div>
            <SectionOptions options={options.slice(0, options.length / 2)} nextQuestion={nextQuestion} amountOptions={amountOptions} optionsHelped={optionsHelped} isHelped={isHelped} />
            <SectionOptions options={options.slice(options.length / 2, options.length)} nextQuestion={nextQuestion} amountOptions={amountOptions} optionsHelped={optionsHelped} isHelped={isHelped} />
        </div>
    )
}

export default Options