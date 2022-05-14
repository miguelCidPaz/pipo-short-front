import Login from './Internal-components/Login'
import {useParams} from 'react-router-dom';
import Register from './Internal-components/Register';

const PrincipalForm = () => {
    const params = useParams();

    return (
        <section className="form--main">
            {params.type === 'register' ? 
            <Register /> :
            <Login />
            }
        </section>
    )
}

export default PrincipalForm