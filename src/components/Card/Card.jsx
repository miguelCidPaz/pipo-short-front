import { useState } from 'react'
import { Link } from 'react-router-dom'
import { callDetail } from '../UserPanel/tools'

const Card = (props) => {
    const [detail, setDetail] = useState([])
    const [viewDetail, setViewDetail] = useState(false)
    const { url, code, totalclicks } = props.element


    const callToApi = async () => {
        if (detail.length < 1) {
            const response = await callDetail(code)
            setDetail(response)
        }
        setViewDetail(!viewDetail)
    }

    const pairToObject = (arr) => {
        const result = []
        for (let i = 0; i < arr.length; i += 2) {
            result.push({ name: arr[i], number: arr[i + 1] })
        }
        return result
    }

    return (
        <>
            {viewDetail ?
                <section className='card--main'>
                    <header className='card--detail-header card--header'>Clicks Details {code}</header>
                    <div className='card--detail-body'>
                        {detail.length > 0 ? <>{detail.platforms.length > 0 ? pairToObject(detail.platforms).map((e, i) => {
                            return <section key={i} className='card--detail-section'>
                                <p className='card--detail-name'>{e.name}</p>
                                <p className='card--detail-number'>{e.number}</p>
                            </section>
                        }) : null
                        }

                            {detail.languages.length > 0 ? pairToObject(detail.languages).map((e, i) => {
                                return <section key={`son${i}`} className='card--detail-section'>
                                    <p className='card--detail-name'>{e.name}</p>
                                    <p className='card--detail-number'>{e.number}</p>
                                </section>
                            }) : null}
                        </>
                            : null}


                    </div>
                    <footer className="card--footer">
                        <button className='card--button-details' onClick={e => setViewDetail(!viewDetail)}>Back</button>
                    </footer>
                </section>
                :
                <section className="card--main ">
                    <header className="card--header">{code}</header>
                    <Link className="card--data card--link" to={`/${code}`} >{url}</Link>
                    <p className="card--data">{totalclicks} Clicks</p>
                    <footer className="card--footer">
                        <button className="card--button-details" onClick={e => callToApi()}>{`->`}</button>
                    </footer>
                </section>}
        </>
    )
}

export default Card