const ResponseAnswer = ({ answer }: { answer: boolean }) => {
    return (
        <div>
            {/* <Icon name={answer ? 'checkcircle' : 'closecircle'} color={answer ? '#00ff00' : '#ff0000'} size={Dimensions.get("window").height / 46} /> */}
            <p>{answer ? 'Correcto' : 'Incorrecto'}</p>
        </div>
    )
}

export default ResponseAnswer