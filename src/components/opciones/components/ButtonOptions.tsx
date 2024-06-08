import { ButtonOptionsPropsType } from "@/types/options.types"

const ButtonOptions = ({ amountOptions, func, text }: ButtonOptionsPropsType) => {
    return (
        <button className={
            amountOptions === Number(text) ? "p-4 bg-teal-500 w-64 rounded-md text-white text-xl hover:bg-teal-400 active:bg-teal-500"
                : "p-4 bg-white w-64 rounded-md text-teal-500 text-xl hover:bg-teal-400 active:bg-teal-500"
        }
            onClick={() => func(Number(text))}>
            {text}
        </button>
    )
}

export default ButtonOptions