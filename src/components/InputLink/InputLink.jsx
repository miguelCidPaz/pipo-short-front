import { useRef, useState } from "react"
import axios from "axios"

const InputLink = () => {
    const [url, setUrl] = useState('');
    const textInput = useRef();

    const submit = (e) => {
        if(e.key === 'Enter')
            encryptUrl(url)
    }

    const encryptUrl = async(myUrl) => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}url/shorturl`,
        { data: {url:myUrl, user:'anon'}})

        setUrl(response.data)

        textInput.current.value = response.data

        if(navigator.clipboard){
            await navigator.clipboard.writeText(response.data)
        }else{
            console.log('Pipo lo siente, tu navegador no es compatible con el copiado automatico')
        }

        
    }

    return(
        <div className="inputlink--main">
            <label className="inputlink--label">Your link:</label>
            <input type="text" ref={textInput} onKeyDown={submit} onChange={e => setUrl(e.target.value)} className="inputlink--input" placeholder="input your link"/>
            <button className="inputlink--button" onClick={e => encryptUrl(textInput.current.value)}>Acortar</button>
        </div>
    )
}

export default InputLink