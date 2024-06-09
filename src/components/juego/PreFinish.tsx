const PreFinish = ({ preFinish }: { preFinish: () => void }) => {
    return (
        <div onClick={preFinish}>
            <div>
                <p>¡Juego Terminado!</p>
                <p>Toca para continuar</p>
            </div>
        </div>
    )
}

export default PreFinish