import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAvatars } from '../../../redux/user/userSlice'
import { API_URL, AVATAR_URL } from '../../../constants/apiConstant'
import { selectUserData } from '../../../redux/user/userSelector'
import axios from 'axios'
import { userAuthContext } from '../../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const AvatarList = () => {
    //on récupère le hook useDispatch pour poouvoir executer une méthode du slice
    const dispatch = useDispatch()

    const { userId } = userAuthContext();
    //ont récupère le hook useNavigate
    const navigate = useNavigate();

    useEffect(() => {
        //on dispatch la méthode fetchAvatars pour récupérer les avatars dans le useEffect
        dispatch(fetchAvatars())
    }, [])

    const { loading, avatars } = useSelector(selectUserData);
    // console.log('avatars', avatars);


    const data = {
    }
    //méthode qui permet de mettre a jour l'avatar pour un utilisateur
    const handleClick = (avatarId) => {
        const data = {
            avatar: `/api/avatars/${avatarId}`
        }
        console.log(data)
        //on va effectuer une requete avec axios pour mettre a jour l'avatar de l'utilisateur
        //pour utiliser la methode patch avec axios on doit lui autoriser de faire des requetes PATCH
        axios.defaults.headers.patch['Content-Type'] = 'application/merge-patch+json';
        axios.patch(`${API_URL}/users/${userId}`, data)
            .then((res) => {
                if (res.status === 200) {
                    //on va rediriger sur la page account
                    navigate(`/account/${userId}`)
                }
            })
            .catch((error) => {
                console.log(`Erreur lors de la mise à jour de l'avatar : ${error}`)
            })
    }
    return (
        <>
            <h2 className="text-white text-3xl font-bold text-center pt-6">Choisir un nouvel avatar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-5 m-10">
                {avatars && avatars.map((avatar => (
                    <div className="w-30 h-30 cursor-pointer"
                        onClick={() => handleClick(avatar.id)}
                        key={avatar.id}
                    >
                        <img src={`${AVATAR_URL}/${avatar.imagePath}`}
                            alt="image avatar"
                            className="w-30 h-30 rounded-full object-cover"

                        />
                    </div>
                )))}
            </div>
        </>
    )
}

export default AvatarList