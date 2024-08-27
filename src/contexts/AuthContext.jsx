import { createContext, useContext, useState } from "react";
import { USER_INFOS } from "../constants/appConstant";


const AuthContext = createContext({

    userId: '', //state
    email: '',
    nickname: '',
    setUserId: () => { }, //méthode pour modifier le state 
    setEmail: () => { },
    setNickname: () => { },
    signIn: async () => { }, //méthode pour se connecter
    signOut: async () => { }, //méthode pour se deconnecter
});

//on définit toute la mécanique de notre context
const AuthContextProvider = ({ children }) => {
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');

    //on definit la méthode signIn
    const signIn = async (user) => {
        try {
            setUserId(user.userId);
            setEmail(user.email);
            setNickname(user.nickname);
            localStorage.setItem(USER_INFOS, JSON.stringify(user));
        } catch (error) {
            throw new Error('Erreur lors de la connexion : ${error}');
        }
    }

    //on definit la méthode signIn
    const signOut = async () => {
        try {
            setUserId('');
            setEmail('');
            setNickname('');
            localStorage.removeItem(USER_INFOS);
        } catch (error) {
            throw new Error('Erreur lors de la déconnexion : ${error}');
        }
    }

    const value = {
        userId, //state
        email,
        nickname,
        setUserId, //méthode pour modifier le state 
        setEmail,
        setNickname,
        signIn, //méthode pour se connecter
        signOut, //méthode pour se deconnecter
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

//création de notre propre hook pour utiliser notre context
const userAuthContext = () => useContext(AuthContext);

export { AuthContext, AuthContextProvider, userAuthContext };
