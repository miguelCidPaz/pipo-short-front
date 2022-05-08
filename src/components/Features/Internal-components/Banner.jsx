const Banner = (props) => {

    return(
        <section className="banner--main">
            {props.data.map((e,i) => {
                return <section className={`banner--card-body banner--card-${i+1}`} key={i}>
                    <div className="banner--card-image">
                        <e.image fontSize="large"/>
                    </div>
                    <h4 className="banner--card-title">{e.name}</h4>
                    <p className="banner--card-text">{e.text}</p>
                </section>
            })}
        </section>
    )
}

export default Banner