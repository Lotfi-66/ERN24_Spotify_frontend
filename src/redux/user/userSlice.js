import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../constants/apiConstant";

const userSlice = createSlice({
    name: "users",
    initialState: {
        loading: false,
        userDetail: {}
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUserDetail: (state, action) => {
            state.userDetail = action.payload;
        }
    }
});

export const { setLoading, setUserDetail } = userSlice.actions;

//on crée une méthode qui permet de récuperer les information d'un usere dans la bdd
export const fetchUserDetail = (id) => async dispatch => {
    try {
        //on passe le loading à true
        dispatch(setLoading(true));
        //on fait une requête à l'api
        const response = await axios.get(`${API_URL}/users/${id}`);
        //on set les données dans le state
        dispatch(setUserDetail(response.data));
        //on repasse le loading à false
        dispatch(setLoading(false));
    } catch (error) {
        console.log(`Erreur lors de la récupération des détails de l'usere: ${error}`);
        //on repasse le loading à false
        dispatch(setLoading(false));
    }
}

export default userSlice.reducer;