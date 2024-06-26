'use client'

import { useContext, useEffect, useState } from "react"
import { useRouter } from 'next/navigation'

import Page from "@/components/general/Page"
import TitleCategories from "@/components/categories/TitleCategories"
import ShowCategories from "@/components/categories/ShowCategories"
import ActionsCategories from "@/components/categories/ActionsCategories"
import ButtonAccept from "@/components/general/ButtonAccept"

import allQuestions from '../../assets/questions.json';

import { IGame } from "@/interface/Game"
import { IUser } from "@/interface/User"

import { UserContext } from "@/server/context/user.context"
import { GameContext } from "@/server/context/game.context"
import { LOADING } from "@/server/constants/game.const"

const Categorias = () => {

  const router = useRouter()

  const { categories, categoryAction, amountOptions, amountQuestions, categoryAllAction } = useContext<IUser>(UserContext)
  const { gameAction, dispatch } = useContext<IGame>(GameContext)

  const [isStart, setIsStart] = useState<boolean>(false)

  const [query, setQuery] = useState<string | null>(null)

  const accept = () => {
    if (query === "juego") {
      dispatch!({
        type: LOADING,
        payload: true
      })

      setIsStart(true)

      return
    }

    router.push('/')
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('redirect');
    setQuery(myParam)
  }, [])
  
  useEffect(() => {
    if (isStart) {
      setIsStart(false)
      gameAction!(allQuestions, categories, amountQuestions, amountOptions, router)
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
      <ButtonAccept isCategory={query === "juego" ? categories.filter(c => c.isSelect).length === 0 : false} func={accept} text={query === "juego" ? "INICIAR" : "ACEPTAR"} />
    </Page>
  )
}

export default Categorias