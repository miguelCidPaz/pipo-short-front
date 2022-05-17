import { callInfo } from "./tools"
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

    return (
        <section className="userpanel--main">

            {allUrls.length > 0 ? allUrls.map((el, i) => {
                return <Card element={el} key={i}/>
            })
                : null}

        </section>
    )
}

export default UserPanel