import { IUser } from '../interface/User';

export const setStorage = (data: IUser) => {
    localStorage.setItem(`persist`, JSON.stringify(data))
}

export const getStorage = () => {

    const storage = localStorage.getItem(`persist`)    

    return storage

}