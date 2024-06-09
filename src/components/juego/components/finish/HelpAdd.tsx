// import Icon from 'react-native-vector-icons/Entypo'

import { HelpType } from '../../../../types/key.props'

const HelpAdd = ({ changeHelp }: { changeHelp: (type: HelpType) => void }) => {
    return (
        <button onClick={() => changeHelp('add')}>
            <div>
                <p>Ayudas</p>
                <p>x2</p>
                {/* <Icon name='help' color={'#ffffff'} size={Dimensions.get("window").height / 39} /> */}
            </div>
            {/* <Icon name='video' color={'#ffffff'} size={Dimensions.get("window").height / 37} /> */}
        </button>
    )
}

export default HelpAdd