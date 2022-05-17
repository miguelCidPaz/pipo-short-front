import { useRef, useState, useContext } from "react"
import { UserContext } from "../ProviderLogin/ProviderLogin";
import axios from "axios"

const InputLink = () => {
    const { username } = useContext(UserContext)
    const [url, setUrl] = useState('');
    const textInput = useRef();

    const submit = (e) => {
        if (url.length() > 5) {
            if (e.key === 'Enter')
                encryptUrl(url)
        }

    }

    const encryptUrl = async (myUrl) => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}url/shorturl`,
            { data: { url: myUrl, user: username !== undefined ? username : 'anon' } })

        setUrl(response.data)

        textInput.current.value = response.data

        if (navigator.clipboard) {
            await navigator.clipboard.writeText(response.data)
        } else {
            console.log('Pipo lo siente, tu navegador no es compatible con el copiado automatico')
        }
    }

    return (
        <div className="inputlink--main">
            <label className="inputlink--label">Your link:</label>
            <input type="text" ref={textInput} onKeyDown={submit} onChange={e => setUrl(e.target.value)} className="inputlink--input" placeholder="input your link" />
            <button className="inputlink--button" onClick={e => encryptUrl(textInput.current.value)}>Acortar</button>
        </div>
    )
}

export default InputLink