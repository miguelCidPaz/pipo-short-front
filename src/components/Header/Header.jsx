import { title_app, links_nav } from '../../assets/resources';
import pipoClown from '../../assets/images/pepeclownPensando.png'
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <header className="header--main">
            <div className='header--title-container'>
                <img src={pipoClown} alt="Pepe Clown" className='header--pipo-image'/>
                <Link className='header--link' to={'/'}><h1 className="header--title">{title_app}</h1></Link>
            </div>

            <nav className="header--nav">
                <ul>
                    {links_nav.map((element, key) => {
                        return (
                            <li key={key} className="header--nav-link">
                                {element === "login" ? 
                                <Link className='header--link' to={"/user-panel"}>{element}</Link> : 
                                <p className='header--link'>{element}</p>}
                               
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </header>
    )
}

export default Header