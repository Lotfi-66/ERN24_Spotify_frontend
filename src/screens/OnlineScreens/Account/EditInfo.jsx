import React, { useState } from 'react'
import CustomInput from '../../../components/CustomInput'
import { Link, useNavigate } from 'react-router-dom'
import ButtonLoader from '../../../components/Loader/ButtonLoader'
import { userAuthContext } from '../../../contexts/AuthContext'
import { checkUser } from '../../../services/userService'
import { USER_INFOS } from '../../../constants/appConstant'

const EditInfo = () => {
    //on récupère les infos de l'utilisateur depuis le authContext
    const { userId, nickname, email, signIn, signOut } = userAuthContext();

    const navigate = useNavigate();

    const [nicknameValue, setNicknameValue] = useState(nickname);
    const [emailValue, setEmailValue] = useState(email);
    const [passwordValue, setPasswordValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userInfo = JSON.parse(localStorage.getItem(USER_INFOS));
            const userValid = await checkUser(userInfo);
            if (userValid) {
                //on vérifie que tous les champs sont remplis
                if (emailValue.length > 0 && nicknameValue.length > 0 && passwordValue.length > 0) {
                    console.log('ok');

                } else {
                    setError('Veuillez remplir tous les champs');
                    return;
                }
            } else {
                signOut();
                navigate('/');
            }
        } catch (error) {
            console.log(`Erreur lors de la création de la session: ${error}`);
        }
    }


    return (
        <div className='flex flex-1 flex-col h-screen justify-start items-center bg-black'>
            <h2 className='text-white font-bold text-xl py-5'>Modifier mes infos</h2>
            <form className='max-w-md mx-auto text-center' onSubmit={handleSubmit}>
                <CustomInput
                    state={nicknameValue}
                    label={"Votre pseudo"}
                    type={"text"}
                    callable={(event) => setNicknameValue(event.target.value)}
                />
                <CustomInput
                    state={emailValue}
                    label={"Email"}
                    type={"email"}
                    callable={(event) => setEmailValue(event.target.value)}
                />
                <CustomInput
                    state={passwordValue}
                    label={"Valider avec votre mot de passe"}
                    type={"password"}
                    callable={(event) => setPasswordValue(event.target.value)}
                />
                <p className='text-white'>Vous avez déjà un compte ?
                    <Link to="/" className='text-white font-bold hover:text-green'> Connectez-vous </Link>
                </p>
                <div className='flex items-center jutify-center pt-5'>
                    {isLoading ? <ButtonLoader /> :
                        <button type='submit' className='bg-green hover:bg-green_toptext-white font-bold py-2 px-4 rounded w-full text-center'>
                            Modifier mes infos
                        </button>}
                </div>
            </form>
        </div>
    )
}

export default EditInfo