import axios, { Axios } from "axios"
import md5 from 'md5'

export const validation = (str) => {
    const validate = /^[A-Za-z0-9]+$/g
    if (typeof str !== 'string' || str.length < 4) return false
    if (validate.test(str)) return true

    return false
}

export const controllerUser = async(user, pass, type) => {
    try{
        const response = await axios.post(`${process.env.REACT_APP_API_URL}user/${type}`,
        { data: {user:user, pass:md5(pass)}})
        return response.data
    }catch(e){
        return 'error'
    }
}

