import { title_app, links_nav } from '../../assets/resources';
import pipoClown from '../../assets/images/pepeclownPensando.png'
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from '../ProviderLogin/ProviderLogin'
import { searchInLocalStorage } from './tools';

const Header = () => {
    let i = 0
    const { username, connectSession } = useContext(UserContext)

    useEffect(() => {
        if(localStorage.length > 0 && i === 0){
            i++
            tryRecover()
        }
    },[])

    const tryRecover = async() => {
        const localStorage = await searchInLocalStorage();
        connectSession(localStorage.username)
    }

    return (
        <header className="header--main">
            <div className='header--title-container'>
                <img src={pipoClown} alt="Pepe Clown" className='header--pipo-image' />
                <Link className='header--link' to={'/'}><h1 className="header--title">{title_app}</h1></Link>
            </div>

            <nav className="header--nav">
                <ul>
                    {links_nav.map((element, key) => {
                        return (
                            <li key={key} className="header--nav-link">
                                {element === "register" ?
                                    username !== undefined ? <Link className='header--link' to={'/user-panel'}>{username}</Link> :
                                        <Link className='header--link' to={"/forms/register"}>{element}</Link> :
                                    <Link className='header--link' to={"/"}>{element}</Link>}
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </header>
    )
}

export default Header