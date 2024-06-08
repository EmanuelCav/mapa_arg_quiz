
import ButtonOptions from "./components/ButtonOptions"

import { IOptionUser } from "@/interface/User"
import { AmountOptionsPropsType } from "@/types/options.types"

const AmountOptions = ({ amountOptions, setOptionsUser }: AmountOptionsPropsType) => {

    const selectAmountOptions = (number: number) => {
        setOptionsUser((optionData: IOptionUser) => ({
            ...optionData, amountOptions: number
        }))
    }

    return (
        <div className="h-1/2 w-full flex flex-col items-center justify-around">
            <p className="text-2xl text-teal-500 font-medium">Selecciona la cantidad de opciones</p>
            <ButtonOptions text='2' func={() => selectAmountOptions(2)} amountOptions={amountOptions} />
            <ButtonOptions text='4' func={() => selectAmountOptions(4)} amountOptions={amountOptions} />
            <ButtonOptions text='6' func={() => selectAmountOptions(6)} amountOptions={amountOptions} />
            <ButtonOptions text='8' func={() => selectAmountOptions(8)} amountOptions={amountOptions} />
        </div>
    )
}

export default AmountOptions