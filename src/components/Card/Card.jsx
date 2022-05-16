import { useEffect, useState } from 'react'
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

    return (
        <>
            {viewDetail ?
                <section className='card--main'>
                    <header className='card--detail-header card--header'>Clicks Details {code}</header>
                    <div className='card--detail-body'>
                        <section className='card--detail-section'>
                            {detail.platforms.length > 0 ? detail.platforms.map((e, i) => {
                                return i % 2 === 0 ?
                                    <p key={i} className='card--detail-name'>{e}</p>
                                    : <p key={i} className='card--detail-number'>{e}</p>
                            })
                                : null}
                        </section>
                        <section className='card--detail-section'>
                            {detail.languages.length > 0 ? detail.languages.map((e, i) => {
                                return i % 2 === 0 ?
                                    <p key={i} className='card--detail-name'>{e}</p>
                                    : <p key={i} className='card--detail-number'>{e}</p>
                            })
                                : null}
                        </section>
                    </div>
                    <footer className="card--footer">
                        <button className='card--button-details' onClick={e => setViewDetail(!viewDetail)}>Back</button>
                    </footer>
                </section>
                :
                <section className="card--main ">
                    <header className="card--header">{code}</header>
                    <a className="card--data card--link" href={`www.localhost:3001/${code}`} target="_blank" rel="noopener noreferrer" >{url}</a>
                    <p className="card--data">{totalclicks} Clicks</p>
                    <footer className="card--footer">
                        <button className="card--button-details" onClick={e => callToApi()}>{`->`}</button>
                    </footer>
                </section>}
        </>
    )
}

export default Card