import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../constants/apiConstant";

const artistSlice = createSlice({
    //on lui donne un nom
    name: "artists",
    //on initialise les valeurs par defaut
    initialState: {
        loading: false, // un flag pour gerer l'attente des requetes
        artistDetail: {}, // un compartiment de rayon pour stocker les détails d'un album
    },
    //méthode qui permet de remplir les states
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setArtistDetail: (state, action) => {
            state.artistDetail = action.payload;
        }
    }
});

export const { setLoading, setArtistDetail } = artistSlice.actions;

//on crée les méthodes qui permettront de récupérer les données dans la bdd
export const fetchArtistDetail = (id) => async dispatch => {
    try {
        //on va passer le loading à true
        dispatch(setLoading(true));
        //on va faire une requête à l'api
        const response = await axios.get(`${API_URL}/artists/${id}`);
        //on va setter les données dans le state
        dispatch(setArtistDetail(response.data));
        //on repasse le loading à false
        dispatch(setLoading(false));
    } catch (error) {
        console.log(`Erreur lors de la récupération des artistes: ${error}`);
        //on repasse le loading à false
        dispatch(setLoading(false));
    }
};


export default artistSlice.reducer