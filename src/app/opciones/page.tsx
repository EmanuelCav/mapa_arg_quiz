'use client'

import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

import Page from '@/components/general/Page'
import ButtonAccept from '@/components/general/ButtonAccept'
import AmountOptions from '@/components/opciones/AmountOptions';
import AmountQuestions from '@/components/opciones/AmountQuestions';

import { IOptionUser, IUser } from '@/interface/User';

import { UserContext } from '@/server/context/user.context';

const Opciones = () => {

  const router = useRouter()

  const { amountOptions, amountQuestions, optionsAction } = useContext<IUser>(UserContext)

  const initialState: IOptionUser = {
    amountOptions,
    amountQuestions
  }

  const [optionUser, setOptionUser] = useState<IOptionUser>(initialState)

  const goBack = () => {
    optionsAction!(optionUser, router)
  }

  return (
    <Page>
      <AmountOptions amountOptions={optionUser.amountOptions} setOptionsUser={setOptionUser} />
      <AmountQuestions amountQuestions={optionUser.amountQuestions} setOptionsUser={setOptionUser} />
      <ButtonAccept text='ACEPTAR' func={goBack} isCategory={false} />
    </Page>
  )
}

export default Opciones