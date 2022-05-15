import { useState, useRef, useEffect } from "react";
import {validation} from './tools'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useIsFocusVisible } from "@mui/material";

const Register = () => {
    const [viewPass, setViewPass] = useState(false)
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [validateUser, setValidateUser] = useState(false)
    const [validatePass, setValidatePass] = useState(false)
    const [validateRetypePass, setValidateRetypePass] = useState(false)
    const inputUser = useRef();
    const inputPass = useRef();

    useEffect(() => {
        setValidateUser(validation(username))
    },[username])

    useEffect(() => {
        setValidatePass(validation(pass))
    },[pass])

    const verifyPass = (text) => {
        setValidateRetypePass(text === pass)
    }

    const validateForm = () => {
        if(validateUser && validatePass && validateRetypePass){
            if(username.length > 0 && pass.length > 0)
                if(validation(username) && validation(pass))
                    console.log(`${username} & ${pass}`)
        }
    }

    return (
        <div className="form--section">
            <input type="text" ref={inputUser} className={validateUser ? 'form--input' : 'form--input-invalidate'} placeholder='Write your name' onChange={e => setUsername(e.target.value)} />
            <div className='form--group'>
                {!viewPass ?
                    <>
                        <div className='form--slot'>
                            <input type="password" placeholder='Write your password' ref={inputPass} className={validatePass ? 'form--input form--pass' : 'form--input-invalidate form--pass-invalidate'} onChange={e => setPass(e.target.value)} />
                            <button className='form--button-view' onClick={e => setViewPass(!viewPass)}><VisibilityIcon className='form--icon' /></button>
                        </div>
                        <input type="password" onChange={e => verifyPass(e.target.value)} className={validateRetypePass ? 'form--input' : 'form--input-invalidate'} placeholder='Retype your password' />
                    </> :
                    <>
                        <div className='form--slot'>
                            <input type='text' placeholder='Write your password' ref={inputPass} className={validatePass ? 'form--input form--pass' : 'form--input-invalidate form--pass-invalidate'} onChange={e => setPass(e.target.value)}/>
                            <button className='form--button-view-inverse' onClick={e => setViewPass(!viewPass)}><VisibilityOffIcon className='form--icon' /></button>
                        </div>
                        <input type="text" onChange={e => verifyPass(e.target.value)} className={validateRetypePass ? 'form--input' : 'form--input-invalidate'} placeholder='Retype your password' />

                    </>
                }
            </div>
            {validateUser && validatePass && validateRetypePass ?
            <button onClick={e => validateForm()} className='form--submit' >Register</button> :
            <button disabled className='form--submit form--submit-disabled'>Register</button>}
        </div>
    )
}

export default Register