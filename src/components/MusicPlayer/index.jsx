import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { playPause } from '../../redux/player/playerSlice';
import Track from './Track';

const MusicPlayer = () => {
    const {activeSong, currentSongs, currentAlbum,currentIndex, isActive, isPlaying}
    = useSelector((state) => state.player)

    //on va déclarer nos states
    const [shuffle, setShuffle] = useState(false); //etat pour le  mode aléatoire
    const [repeat, setRepeat] = useState(false); //etat pour le  mode repeat
    const [volume, setVolume] = useState(0.3); //etat pour le volume
    const [duration, setDuration] = useState(0); //duree de la chanson
    const [seekTime, setSeekTime] = useState(0); //position de lecture de la chanson
    const [appTime, setAppTime] = useState(0); //temps actuel de la chanson

    //on récupère les hooks
    const dispatch = useDispatch();

    useEffect(() => {
        //si le store contient un tableau de chanson on dispatch playPause a true
        if (currentSongs?.length) dispatch(playPause(true))
    }, [currentIndex])//si currentIndex change => on reload le composant


    return (
        <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
            <Track
            isPlaying={isPlaying}
            isActive={isActive}
            currentAlbum={currentAlbum}
            activeSong={activeSong}
            />
        </div>
    )
}

export default MusicPlayer