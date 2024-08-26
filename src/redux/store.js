import { configureStore } from '@reduxjs/toolkit'
import albumReducer from './albums/albumSlice'

const store = configureStore({
    reducer: {
        //on déclare ici les reducers
        albums: albumReducer,
    }
})

export default store