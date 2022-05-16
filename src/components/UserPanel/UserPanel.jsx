import { callInfo, callDetail } from "./tools"
import { useEffect, useState } from 'react'
import Card from '../Card/Card'

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

            {allUrls.length > 0 ? allUrls.map((el, i) => {
                { console.log(el) }
                return <Card element={el}/>
            })
                : null}

        </section>
    )
}

export default UserPanel