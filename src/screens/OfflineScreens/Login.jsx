import React, { useState } from 'react'
import { userAuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';
import ButtonLoader from '../../components/Loader/ButtonLoader';

const Login = () => {
    //on va déclarer nos states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading,setIsLoading] = useState(false);

    //on va récupérer la méthode signIn de notre context d'authentification

    const {signIn} = userAuthContext();
    //on récupère le hook de navigation
    const navigate = useNavigate();

    //méthode qui receptionne les données du formulaire
    const handleSubmit = (event) => {
        event.preventDefault(); //empêche le fontionnement par defaut du formulaire
        console.log('email', email);
        console.log('password', password);
    }

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
                state={password}
                label="Mot de passe"
                type="password"
                callable={(event) => setPassword(event.target.value)}
            />
            <p className='text-white'>Vous n'avez pas de compte ?
                <Link to="/register" className='text-white font-bold hover:text-green'> Créer un compte</Link>
            </p>
            <div className='flex items-center jutify-center pt-5'>
                {isLoading ? <ButtonLoader /> : 
                <button type='submit' className='bg-green hover:bg-green_toptext-white font-bold py-2 px-4 rounded w-full text-center'>
                    Connexion
                </button>}
            </div>
            </form>
        </div>
    )


    return (
        <div>Login</div>
    )
}

export default Login