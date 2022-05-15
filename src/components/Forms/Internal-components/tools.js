import axios from "axios"

export const validation = (str) => {
    const validate = /^[A-Za-z0-9]+$/g
    if (typeof str !== 'string' || str.length < 4) return false
    if (validate.test(str)) return true

    return false
}

export const registerUser = async(user, pass) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}user/register`,
    { data: {user:user, pass:pass}})
    console.log(response.data)
}