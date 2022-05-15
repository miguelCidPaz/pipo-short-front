import axios from "axios"

export const searchInLocalStorage = async() => {
    try{
        const token = localStorage.getItem("key")
        const response = await recoverSession(token)
        return response.data
    }catch(e){
        console.log(e)
        return ''
    }
}

const recoverSession = async(token) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/recover`,{
        headers:{Authorization: "Bearer "+token}
    })
    return response
}