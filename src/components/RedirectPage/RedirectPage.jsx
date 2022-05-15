import { useEffect } from "react";
import axios from 'axios'
import {useParams} from 'react-router-dom'

const RedirectPage = () => {
    const navigate = useParams();
    let i = 0
    const date = new Date();
    //const thisDate = `${hoy.getDate()}-${hoy.getMonth()+1}-${hoy.getFullYear()}--${hoy.getHours()}:${hoy.getMinutes()}`

    const callToApi = async() => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}url/geturl`,
        { data: {code:navigate.code, language: navigator.language, date:date, platform:navigator.userAgentData.platform, lastUrl:document.referrer || ''}})
        const url = response.data
        console.log(window.location.href)
        if(url.includes('http://www.')){
            window.location.href = url
        }else{
            window.location.href = `http://www.${url}`
        }
    }
    
    useEffect(() => {
        if(i === 0){
            callToApi();
            i++;
        }
    },[])

    return (
        <section>
            <div></div>
        </section>
    )
}

export default RedirectPage