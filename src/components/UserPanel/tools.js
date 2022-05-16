import axios from "axios"

export const callInfo = async() => {
    let token = ''
    if(localStorage.length > 0){
        try{
            token = localStorage.getItem("key")
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/url/getallurls`,{
                headers:{Authorization: "Bearer "+token}
            })
            return response.data
        }catch(e){
            console.log(e)
            console.log('no se encuentra token')
        }
    }
    return "No deberias estar aqui"
}

export const callDetail = async (code) => {
    try{
        const token = localStorage.getItem("key")
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/url/getdetail/${code}`, {
            headers:{Authorization: "Bearer "+token}
        })
        return response.data
    }catch(e){
        return []
    }
}