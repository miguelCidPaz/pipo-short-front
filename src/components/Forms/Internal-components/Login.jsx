import { useState, useContext } from "react";
import { UserContext } from "../../ProviderLogin/ProviderLogin";
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { controllerUser, validation } from "./tools";

const Login = () => {
    const [viewPass, setViewPass] = useState(false)
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [validateUser, setValidateUser] = useState(false)
    const [validatePass, setValidatePass] = useState(false)
    const {connectSession} = useContext(UserContext)
    const navigate = useNavigate();

    const validationUser = (e) => {
        setValidateUser(validation(e))
        setUsername(e)
    }

    const validationPass = (e) => {
        setValidatePass(validation(e))
        setPass(e)
    }

    const validateForm = async () => {
        if (validateUser && validatePass) {
            if (username.length > 0 && pass.length > 0) {
                if (validation(username) && validation(pass)) {
                    const response = await controllerUser(username, pass, 'login')
                    connectSession(response.username)
                    localStorage.setItem("key", response.token)
                    if(response.username) navigate('/')
                }
            }
        }
    }

    const keyDown = (e) => {
        if(e.key) validateForm()
    }


    return (
        <div className="form--section">
            <input type="text" onKeyDown={keyDown} className={validateUser ? 'form--input' : 'form--input-invalidate'} placeholder='Write your name' onChange={e => validationUser(e.target.value)} />
            <div className='form--group'>
                {!viewPass ?
                    <>
                        <div className='form--slot'>
                            <input type="password" onKeyDown={keyDown} placeholder='Write your password' className={validatePass ? 'form--input form--pass' : 'form--input-invalidate form--pass-invalidate'} onChange={e => validationPass(e.target.value)} />
                            <button className='form--button-view' onClick={e => setViewPass(!viewPass)}><VisibilityIcon className='form--icon' /></button>
                        </div>
                    </> :
                    <>
                        <div className='form--slot'>
                            <input type='text' onKeyDown={keyDown} placeholder='Write your password' className={validatePass ? 'form--input form--pass' : 'form--input-invalidate form--pass-invalidate'} onChange={e => validationPass(e.target.value)} />
                            <button className='form--button-view-inverse' onClick={e => setViewPass(!viewPass)}><VisibilityOffIcon className='form--icon' /></button>
                        </div>
                    </>
                }
            </div>
            {validateUser && validatePass ?
                <button onClick={e => validateForm()} className='form--submit' >Login</button> :
                <button disabled className='form--submit form--submit-disabled'>Login</button>}
        </div>
    )
}

export default Login