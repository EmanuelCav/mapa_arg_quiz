import { IoIosCheckmarkCircle, IoIosCloseCircle  } from "react-icons/io";

const ResponseAnswer = ({ answer }: { answer: boolean }) => {
    return (
        <div className="w-full flex justify-center items-center">
            {
                answer ? <IoIosCheckmarkCircle size={24} color="#00ff00" />
                : <IoIosCloseCircle size={24} color="#ff0000" />
            }
            <p className={answer ? 'text-green-500 text-2xl mx-4' : 'text-red-500 text-2xl mx-4'}>{answer ? 'Correcto' : 'Incorrecto'}</p>
        </div>
    )
}

export default ResponseAnswer