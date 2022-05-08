import { title_app, links_nav } from '../../assets/resources';
import ButtonTurnLight from './InternalComponents/ButtonTurnLight'
import pipoClown from '../../assets/images/pepeclownPensando.png'

const Header = (props) => {

    return (
        <header className="header--main">
            <div className='header--title-container'>
                <img src={pipoClown} alt="Pepe Clown" className='header--pipo-image'/>
                <h1 className="header--title">{title_app}</h1>
            </div>

            <nav className="header--nav">
                <ul>
                    {links_nav.map((element, key) => {
                        return (
                            <li key={key} className="header--nav-link">
                                <div className='header--grate'></div>
                                <p className='header--link'>{element}</p>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </header>
    )
}

export default Header