import { title_app, links_nav } from '../../assets/resources';

const Header = () => {

    return (
        <header className="header--main">
            <div>
                <h1 className="header--title">{title_app}</h1>
            </div>

            <nav className="header--nav">
                <ul>
                    {links_nav.map(e => {
                        return (
                            <li className="header--nav-link">
                                <p>{e}</p>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </header>
    )
}

export default Header