import React, { useState } from 'react'

import { getRegistrationForm } from '../../libs/getRegistration'

const RegistrPage = () => {
    const [name, setName] = useState('');
    const [mail, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SendForm = () => {
        const userData = {
            name: name,
            mail: mail,
            password: password,
        }
        
        getRegistrationForm(userData)
    }

    return(
        <div>
            <form>
                <input type="text" name="name" placeholder="Name" value={name} onChange={(event)=> setName(event.target.value)} />
                <input type="email" name="mmail" placeholder="Email" value={mail} onChange={(event)=> setEmail(event.target.value)} />
                <input type="password" name="password" placeholder="Password" value={password} onChange={(event)=> setPassword(event.target.value)} />
                <button onClick={SendForm}>
                    Войти
                </button>
            </form>
        </div>
    )
}

export default RegistrPage
