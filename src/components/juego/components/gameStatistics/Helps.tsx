import { HelpsPropsType } from '../../../../types/juego.types'

const Helps = ({ isAnswered, helps, changeHelp }: HelpsPropsType) => {
    return (
        <div style={{ width: '16%' }}>
            <button disabled={isAnswered} onClick={() => changeHelp('help')}>
                <p>{helps}</p>
                {/* <Icon name='help' color={'#ffffff'} size={Dimensions.get("window").height / 39} /> */}
            </button>
        </div>
    )
}

export default Helps