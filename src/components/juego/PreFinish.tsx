const PreFinish = ({ preFinish }: { preFinish: () => void }) => {
    return (
        <div onClick={preFinish}
        className="cursor-pointer fixed top-0 left-0 w-full h-full flex justify-center items-center" style={{ backgroundColor: 'rgba(93, 193, 185, 0.5)' }}>
            <div className="w-2/3 p-6 flex justify-center items-center bg-white border-2 border-teal-500 border-solid flex-col">
                <p className="text-teal-500 text-2xl">¡Juego Terminado!</p>
                <p className="text-teal-500 text-xl mt-2">Toca para continuar</p>
            </div>
        </div>
    )
}

export default PreFinish