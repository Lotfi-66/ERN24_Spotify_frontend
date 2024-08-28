import { configureStore } from '@reduxjs/toolkit'
import albumReducer from './albums/albumSlice'
import playerReducer from './player/playerSlice'

const store = configureStore({
    reducer: {
        //on déclare ici les reducers
        albums: albumReducer,
        player: playerReducer
    }
})

export default store