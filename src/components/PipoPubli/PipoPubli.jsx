import pipo from '../../assets/images/pepeDesnudo.png'

const PipoPubli = () => {

    const features = ['Rapido', 'Seguro', 'Anonimo']
    return(
        <div className="pipopubli--main">
            <img src={pipo} alt="Pepe run" className='pipopubli--image'/>
            <div className="pipopubli--features">
                {features.map((e, i) => <p key={i} className={`pipopubli--feature pipopubli--feature-${i+1}`}>{e}</p>)}               
            </div>
        </div>
    )
}

export default PipoPubli