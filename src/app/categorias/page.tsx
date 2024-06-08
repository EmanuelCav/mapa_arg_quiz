'use client'

import { useContext, useEffect, useState } from "react"
import { useRouter } from 'next/navigation';

import Page from "@/components/general/Page"
import TitleCategories from "@/components/categories/TitleCategories"
import ShowCategories from "@/components/categories/ShowCategories"
import ActionsCategories from "@/components/categories/ActionsCategories"

import allQuestions from '../../assets/questions.json';

import { IGame } from "@/interface/Game"
import { IUser } from "@/interface/User"

import { UserContext } from "@/server/context/user.context"
import { GameContext } from "@/server/context/game.context"
import { LOADING } from "@/server/constants/game.const"
import ButtonAccept from "@/components/general/ButtonAccept"

const Categorias = () => {

  const router = useRouter()

  const { categories, categoryAction, amountOptions, amountQuestions, categoryAllAction } = useContext<IUser>(UserContext)
  const { gameAction, dispatch } = useContext<IGame>(GameContext)

  const [isStart, setIsStart] = useState<boolean>(false)


  const accept = () => {
    // if (route.params.isPlaying) {
    //   dispatch!({
    //     type: LOADING,
    //     payload: true
    //   })

    //   setIsStart(true)

    //   return
    // }

    router.push('/')
  }

  useEffect(() => {
    if (isStart) {
      setIsStart(false)
      gameAction!(allQuestions, categories, amountQuestions, amountOptions)
      return
    }

    dispatch!({
      type: LOADING,
      payload: false
    })
  }, [isStart])

  return (
    <Page>
      <TitleCategories />
      <ActionsCategories categoryAllAction={categoryAllAction!} />
      <ShowCategories categories={categories} categoryAction={categoryAction!} />
      <ButtonAccept isCategory={true} func={accept} text="ACEPTAR" />
    </Page>
  )
}

export default Categorias