import SectionOptions from './components/options/SectionOptions'

import { SectionOptionsPropsTypes } from '../../types/juego.types'

const Options = ({ options, nextQuestion, optionsHelped, isHelped }: SectionOptionsPropsTypes) => {
    return (
        <div style={{ height: '42%' }} className='w-full flex flex-row justify-center items-stretch'>
            <SectionOptions options={options.slice(0, options.length / 2)} nextQuestion={nextQuestion} optionsHelped={optionsHelped} isHelped={isHelped} />
            <SectionOptions options={options.slice(options.length / 2, options.length)} nextQuestion={nextQuestion} optionsHelped={optionsHelped} isHelped={isHelped} />
        </div>
    )
}

export default Options