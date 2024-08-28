import { createSlice } from "@reduxjs/toolkit"

//on va initialiser nos states dans une constante 
const initialState = {
    activeSong: {}, //chanson en cours de lecture
    currentAlbum: [], //album en cours de lecture
    currentIndex: 0, //index de la chanson en cours de lecture dans son tableau
    currentSongs: [], //tableau de chanson en cours de lecture
    isActive: false, //flag pour savoir si le palyer est activé
    isPlaying: false, //flag pour savoir si le player est en cours de lecture
}

//création du slice pour la gestion du player
const playerSlice = createSlice({
    //on lui donne un nom
    name: "player",
    //on initialise les valeurs par defaut
    initialState,
    //méthode qui permet de remplir les states
    reducers: {
        //tout ce qu'on stock lorsqu'on active une chanson
        setActiveSong: (state, action) => {
            //stockage de la chanson en lecture dans activeSong
            state.activeSong = action.payload?.songs[action.payload?.index];
            //stockage du tableau de chansons dans currentSongs
            state.currentSongs = action.payload?.songs;
            //stockage de l'indx de la chanson en lecture dans currentIndex
            state.currentIndex = action.payload?.index;
            //stockage de l'etat du player à true
            state.isActive = true;
        },
        //récupération des données de l'album
        setActiveAlbum: (state, action) => {
            state.currentAlbum = action.payload?.data;
        },

        //pour avancer la liste de lecture
        nextSong: (state, action) => {
            //récupère la chanson suivante dans le tableau de chanson à l'index suivant
            state.activeSong = state.currentSongs[action.payload];
            //on stock le nouvel index
            state.currentIndex = action.payload;
            //on active le player
            state.isActive = true;
        },
        //pour reculer la liste de lecture
        prevSong: (state, action) => {
            //récupère la chanson suivante dans le tableau de chanson à l'index suivant
            state.activeSong = state.currentSongs[action.payload];
            //on stock le nouvel index
            state.currentIndex = action.payload;
            //on active le player
            state.isActive = true;
        },

        //pour mettre en play ou pause a la musique
        playPause: (state, action) => {
            state.isPlaying = action.payload;
        }

    }
});

//on exporte les actions
export const { setActiveSong, setActiveAlbum, nextSong, prevSong, playPause } = playerSlice.actions
//export du reducer
export default playerSlice.reducer
