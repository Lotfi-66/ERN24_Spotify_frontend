import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../constants/apiConstant";
import axios from "axios";

const albumSlice = createSlice({
    //on lui donne un nom
    name: "albums",
    //on initialise les valeurs par defaut
    initialState: {
        loading: false,
        albums: [],
    },
    //méthode qui permet de remplir les states
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;

        },
        setAlbums: (state, action) => {
            state.albums = action.payload
        }
    }
});

export const { setLoading, setAlbums } = albumSlice.actions

//on crée les methodes qui permettront de récupéréer les données dans la bdd

export const fetchAlbums = () => async dispatch => {
    try {
        //on va passer le loading a true
        dispatch(setLoading(true));
        //on va faire une requete  a l'api
        const response = await axios.get(`${API_URL}/albums?page=1`);
        //on va setter les données dans le state
        dispatch(setAlbums(response.data));
        //on va passer le loading a false
        dispatch(setLoading(false));
    } catch (error) {
        console.log(`Erreur lors de la récupération des albums : ${error}`);
        dispatch(setLoading(false));

    }
}

//on export notre reducer
export default albumSlice.reducer
