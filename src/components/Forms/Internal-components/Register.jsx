import { useState, useRef, useEffect } from "react";
import {validation} from './tools'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Register = () => {
    const [viewPass, setViewPass] = useState(false)
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [validateUser, setValidateUser] = useState(false)
    const [validatePass, setValidatePass] = useState(false)
    const [retypePass, setRetypePass] = useState(false)
    const inputUser = useRef();
    const inputPass = useRef();

    useEffect(() => {
        setValidateUser(validation(username))
    },[username])

    useEffect(() => {
        setValidatePass(validation(pass))
    },[pass])

    const verifyPass = (text) => {
        setRetypePass(text === pass)
    }

    return (
        <div className="form--section">
            <input type="text" ref={inputUser} className='form--input' placeholder='Write your name' onChange={e => setUsername(e.target.value)} />
            <div className='form--group'>
                {!viewPass ?
                    <>
                        <div className='form--slot'>
                            <input type="password" placeholder='Write your password' ref={inputPass} className='form--input form--pass' onChange={e => setPass(e.target.value)} />
                            <button className='form--button-view' onClick={e => setViewPass(!viewPass)}><VisibilityIcon className='form--icon' /></button>
                        </div>
                        <input type="password" onChange={e => verifyPass(e.target.value)} className='form--input' placeholder='Retype your password' />
                    </> :
                    <>
                        <div className='form--slot'>
                            <input type='text' placeholder='Write your password' ref={inputPass} className='form--input form--pass' onChange={e => setPass(e.target.value)}/>
                            <button className='form--button-view-inverse' onClick={e => setViewPass(!viewPass)}><VisibilityOffIcon className='form--icon' /></button>
                        </div>
                        <input type="text" onChange={e => verifyPass(e.target.value)} className='form--input' placeholder='Retype your password' />

                    </>
                }
            </div>
            <button className='form--submit' >Register</button>
        </div>
    )
}

export default Register