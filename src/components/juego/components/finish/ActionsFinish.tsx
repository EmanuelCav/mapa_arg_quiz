import ButtonFinish from './ButtonFinish'

import { ActionsFinishPropsType } from '../../../../types/juego.types'

const ActionsFinish = ({ areErrors, continueHome, showErrors }: ActionsFinishPropsType) => {
  return (
    <div>
      {
        areErrors &&
        <ButtonFinish text='REPASAR ERRORES' func={showErrors} />
      }
      <ButtonFinish text='CONTINUAR' func={continueHome} />
    </div>
  )
}

export default ActionsFinish