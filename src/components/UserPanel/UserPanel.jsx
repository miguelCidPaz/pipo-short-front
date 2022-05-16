import { callInfo, callDetail } from "./tools"
import { useEffect, useState } from 'react'

const UserPanel = () => {
    const [allUrls, setAllUrls] = useState([])
    let i = 0

    useEffect(() => {
        if (i === 0) {
            i++
            controllerInfo();
        }

    }, [])

    const controllerInfo = async () => {
        const response = await callInfo();
        setAllUrls(response)
    }

    const detail = async (code) => {
        const response = await callDetail(code)
        console.log(response)
    }

    return (
        <section className="userpanel--main">
            
            {allUrls.length > 0 ? allUrls.map((el,i) => {
             return <button className="userpanel--button" key={i} onClick={e => detail(el.code)}>{el.code + ' - ' +el.url}</button>   
            })
        :null}

        </section>
    )
}

export default UserPanel