import { title_app, links_nav } from '../../assets/resources';
import ButtonTurnLight from './InternalComponents/ButtonTurnLight'

const Header = (props) => {

    return (
        <header className="header--main">
            <div>
                <h1 className="header--title">{title_app}</h1>
            </div>

            <ButtonTurnLight turnLight={props.turnLight} theme={props.theme}/>

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