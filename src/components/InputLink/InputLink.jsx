import { useState } from "react"
import axios from "axios"

const InputLink = () => {
    const [url, shortUrl] = useState('');

    const submit = (e) => {
        if(e.key === 'Enter')
            encryptUrl(url)
    }

    const encryptUrl = async(myUrl) => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}url/shorturl`,
        { data: {url:myUrl, user:'anon'}})

        console.log(response)

    }

    return(
        <div className="inputlink--main">
            <label className="inputlink--label">Your link:</label>
            <input type="text" onKeyDown={submit} onChange={e => shortUrl(e)} className="inputlink--input" placeholder="input your link"/>
            <button>Acortar</button>
        </div>
    )
}

export default InputLink