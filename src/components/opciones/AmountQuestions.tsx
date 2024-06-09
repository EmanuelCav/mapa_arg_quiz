import { Slider } from "@nextui-org/slider";

import { IOptionUser } from "@/interface/User"
import { AmountQuestionsPropsType } from "@/types/options.types"

const AmountQuestions = ({ amountQuestions, setOptionsUser }: AmountQuestionsPropsType) => {
    return (
        <div className="h-1/3 w-full flex flex-col items-center justify-around">
            <p className="text-2xl text-teal-500 font-medium text-center">Mueve el cursor para elegír la cantidad de preguntas</p>
            <p className="text-xl text-teal-500 font-medium">{amountQuestions}</p>
            <Slider
                size="md"
                step={5}
                maxValue={30}
                minValue={5}
                aria-label="Temperature"
                defaultValue={amountQuestions}
                className="max-w-md"
                color="success"
                onChange={(value) => setOptionsUser((optionData: IOptionUser) => ({
                    ...optionData, amountQuestions: Number(value)
                }))}
            />
        </div>
    )
}

export default AmountQuestions