import { createContext } from "react";


const AuthContext = createContext({

    userId: '', //state
    email: '',
    nickname: '',
    setUserId: () => {}, //méthode pour modifier le state 
    setEmail: () => {},
    setNickname: () => {},  
    signIn: async () => {}, //méthode pour se connecter
    signOut: async () => {}, //méthode pour se deconnecter
}
);