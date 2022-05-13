import { useRef, useState } from "react"
import axios from "axios"

const InputLink = () => {
    const [url, shortUrl] = useState('');
    const textInput = useRef();

    const submit = (e) => {
        if(e.key === 'Enter')
            encryptUrl(url)
    }

    const encryptUrl = async(myUrl) => {
        /* const response = await axios.post(`${process.env.REACT_APP_API_URL}url/shorturl`,
        { data: {url:myUrl, user:'anon'}}) */

        console.log(myUrl)

    }

    return(
        <div className="inputlink--main">
            <label className="inputlink--label">Your link:</label>
            <input type="text" ref={textInput} onKeyDown={submit} onChange={e => shortUrl(e.target.value)} className="inputlink--input" placeholder="input your link"/>
            <button className="inputlink--button" onClick={e => encryptUrl(textInput.current.value)}>Acortar</button>
        </div>
    )
}

export default InputLink