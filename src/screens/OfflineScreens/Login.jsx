import React, { useState } from 'react'
import { userAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';

const Login = () => {
    //on va déclarer nos states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading,setIsLoading] = useState(false);

    //on va récupérer la méthode signIn de notre context d'authentification

    const {signIn} = userAuthContext();
    //on récupère le hook de navigation
    const navigate = useNavigate();

    return (
        <div className='flex flex-1 flex-col h-screen justify-start items-center bg-black'>
            <h2 className='text-white font-bold text-xl py-5'>Connectez vous !</h2>
            <form className='max-w-md mx-auto text-center'>
            <CustomInput
                state={email}
                label="Email"
                type="email"
                callable={(event) => setEmail(event.target.value)}
            />
            <CustomInput
                state={email}
                label="Mot de passe"
                type="password"
                callable={(event) => setEmail(event.target.value)}
            />
            </form>
        </div>
    )


    return (
        <div>Login</div>
    )
}

export default Login