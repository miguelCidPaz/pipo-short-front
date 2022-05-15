import Login from './Internal-components/Login'
import { useParams, Link } from 'react-router-dom';
import Register from './Internal-components/Register';

const PrincipalForm = () => {
    const params = useParams();

    return (
        <section className="form--main">
            <div className='form--redirect'>
                {params.type === 'register' ?
                    <><p className='form--redirect-text'>You have an account?</p><Link className='form--redirect-link' to={'/forms/login'}>Click here</Link></> :
                    <><p className='form--redirect-text'>You havent an account?</p><Link className='form--redirect-link' to={'/forms/register'}>Click here</Link></>}
            </div>
            {params.type === 'register' ?
                <Register /> :
                <Login />
            }
        </section>
    )
}

export default PrincipalForm