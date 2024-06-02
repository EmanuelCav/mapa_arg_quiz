import { ReactNode, createContext, useReducer } from 'react'

import { IOptionUser, IUser } from '../../interface/User'
import { ICategory } from '../../interface/Game'
import { Action } from '../../types/props.types'
import { HelpType } from '../../types/key.props'

import { initialState } from '../value/user.value'
import { ACTION_CATEGORY, CHANGE_HELPS, SELECT_CATEGORY, UPDATE_OPTIONS, USER } from '../constants/user.const'
import userReducer from '../reducer/user.reducer'

import { setStorage } from '../../helper/storage'

export const UserContext = createContext<IUser>(initialState)

const UserGlobalContext = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer<(state: IUser, actions: Action) => IUser>(userReducer, initialState)

    const optionsAction = (optionData: IOptionUser) => {

        try {

            dispatch({
                type: UPDATE_OPTIONS,
                payload: {
                    amountQuestions: optionData.amountQuestions,
                    amountOptions: optionData.amountOptions,
                }
            })

            setStorage({
                categories: state.categories,
                amountQuestions: optionData.amountQuestions,
                amountOptions: optionData.amountOptions,
                helps: state.helps
            })

            // navigation.goBack()

        } catch (error) {
            console.log(error);
        }

    }

    const categoryAction = (categories: ICategory[]) => {

        try {

            dispatch({
                type: SELECT_CATEGORY,
                payload: categories
            })

            setStorage({
                categories,
                amountQuestions: state.amountQuestions,
                amountOptions: state.amountOptions,
                helps: state.helps
            })

        } catch (error) {
            console.log(error);
        }

    }

    const userAction = (data: IUser) => {

        try {

            dispatch({
                type: USER,
                payload: JSON.parse(data as any)
            })

            setStorage(state)

        } catch (error) {
            console.log(error);
        }

    }

    const categoryAllAction = (isSelect: boolean) => {

        try {

            dispatch({
                type: ACTION_CATEGORY,
                payload: isSelect
            })

            setStorage({
                categories: state.categories.map((c) => c.isSelect !== isSelect ? {
                    category: c.category,
                    corrects: c.corrects,
                    questions: c.questions,
                    isSelect,
                    isImage: c.isImage
                } : c),
                amountQuestions: state.amountQuestions,
                amountOptions: state.amountOptions,
                helps: state.helps
            })

        } catch (error) {
            console.log(error);
        }

    }

    const helpsAction = (type: HelpType) => {

        if (type === 'help') {
            dispatch({
                type: CHANGE_HELPS,
                payload: -1
            })
        } else {
            dispatch({
                type: CHANGE_HELPS,
                payload: 2
            })
        }

    }

    return (
        <UserContext.Provider value={{ ...state, optionsAction, categoryAction, userAction, categoryAllAction, helpsAction }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserGlobalContext