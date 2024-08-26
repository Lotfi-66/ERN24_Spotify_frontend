import { createContext, useState } from "react";

//création d'un mini context pour la session
const SessionContext = createContext(
    { inSession: false }
);
//création du hook pour utiliser le context de session
export const useSessionContext = () => useContext(SessionContext);

const AppRouter = () => {
    //on déclare notre state de session
    const [session, setSession] = useState(null);
    //on récupère le infos de notre authContext
    const { userId, setUserId, setEmail, setNickname } = useAuthContext();
    //on va regarder si on a des infos dans le localstorage 
}

export default AppRouter
