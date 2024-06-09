import { IUser } from '../interface/User';

export const setStorage = (data: IUser) => {
    localStorage.setItem(`${process.env.NEXT_PUBLIC_EXPO_STORAGE}`, JSON.stringify(data))
}

export const getStorage = () => {    

    const storage = localStorage.getItem(`${process.env.NEXT_PUBLIC_EXPO_STORAGE}`)    

    return storage

}