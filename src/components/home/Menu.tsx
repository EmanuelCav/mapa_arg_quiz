import { useEffect, useState } from "react"

import allQuestions from '../../assets/questions.json';

import ButtonMenu from "./components/ButtonMenu"

import { MenuPropsType } from "@/types/home.types"

import { LOADING } from "@/server/constants/game.const"

const Menu = ({ router, categories, dispatch, gameAction, amountQuestions, amountOptions }: MenuPropsType) => {

  const [isStart, setIsStart] = useState<boolean>(false)

    const start = (route: string) => {

        if (categories.filter(c => c.isSelect).length === 0) {
            
            router.push(`/${route}?redirect=juego`)

            return
        }

        dispatch({
            type: LOADING,
            payload: true
          })
      
          setIsStart(true)
    }

    const redirect = (route: string) => {
        router.push(`/${route}`)
    }

    useEffect(() => {
        if (isStart) {
            setIsStart(false)
            gameAction!(allQuestions, categories, amountQuestions, amountOptions, router)
            return
        }

        dispatch({
            type: LOADING,
            payload: false
        })
    }, [isStart])

    return (
        <div className="h-3/4 flex items-center justify-around flex-col">
            <ButtonMenu text="INICIAR" route='categorias' func={start} />
            <ButtonMenu text="CATEGORIAS" route='categorias' func={redirect} />
            <ButtonMenu text="OPCIONES" route='opciones' func={redirect} />
            <ButtonMenu text="ESTADÍSTICAS" route='estadisticas' func={redirect} />
        </div>
    )
}

export default Menu