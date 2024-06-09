'use client'

import { ReactNode, createContext, useReducer } from 'react'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

import { Action } from '../../types/props.types'
import { ICategory, IGame, IQuestion } from '../../interface/Game'

import gameReducer from '../reducer/game.reducer'
import { initialState } from '../value/game.value'
import { GENERATE_GAME } from '../constants/game.const'

import { generateGame, generateQuestions } from '../../helper/game'

export const GameContext = createContext<IGame>(initialState)

const GameGlobalContext = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer<(state: IGame, action: Action) => IGame>(gameReducer, initialState)

    const gameAction = (allQuestions: IQuestion[], categories: ICategory[], amountQuestions: number, amountOptions: number, router: AppRouterInstance) => {

        const questions = generateQuestions(allQuestions, categories, amountQuestions)

        const game = generateGame(questions, allQuestions, amountQuestions, amountOptions)

        console.log(game);
        

        dispatch({
            type: GENERATE_GAME,
            payload: game
        })

        router.push('/juego')

    }

    return (
        <GameContext.Provider value={{ ...state, gameAction, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameGlobalContext