import axios from "axios";
import { API_URL } from "../constants/apiConstant.js";

export const checkUser = async (userInfo) => {
    try {
        // On va récupèrer l'utilisateur en bdd avec l'id de l'utilisateur en session
        const response = await axios.get(`${API_URL}/users/${userInfo.userId}`)
        const user = response.data;

        // Maintenant on compare les données de la bdd avec les données du localStorage
        if (user.email === userInfo.email && user.nickname === userInfo.nickname) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(`Erreur sur le checkUser : ${error}`);
        return false;
    }
}