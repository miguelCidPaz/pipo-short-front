import { useState, useRef } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Register = () => {
    const [viewPass, setViewPass] = useState(false)
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const inputUser = useRef();
    const inputPass = useRef();

    return (
        <div className="form--section">
            <input type="text" ref={inputUser} className='form--input' placeholder='Write your name' />
            <div className='form--group'>
                {!viewPass ?
                    <>
                        <div className='form--slot'>
                            <input type="password" placeholder='Write your password' ref={inputPass} className='form--input form--pass' />
                            <button className='form--button-view' onClick={e => setViewPass(!viewPass)}><VisibilityIcon className='form--icon' /></button>
                        </div>
                        <input type="password" ref={inputUser} className='form--input' placeholder='Retype your password' />
                    </> :
                    <>
                        <div className='form--slot'>
                            <input type='text' placeholder='Write your password' ref={inputPass} className='form--input form--pass' />
                            <button className='form--button-view-inverse' onClick={e => setViewPass(!viewPass)}><VisibilityOffIcon className='form--icon' /></button>
                        </div>
                        <input type="text" ref={inputUser} className='form--input' placeholder='Retype your password' />

                    </>
                }
            </div>
            <button className='form--submit' >Register</button>
        </div>
    )
}

export default Register