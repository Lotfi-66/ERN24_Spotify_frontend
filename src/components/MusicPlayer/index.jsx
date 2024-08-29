import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextSong, playPause, prevSong } from '../../redux/player/playerSlice'
import Track from './Track'
import Controls from './Controls'
import SeekBar from './SeekBar'
import Player from './Player'

const MusicPlayer = () => {
    //on va récupérer toutes les données de notre slice player
    const { activeSong, currentSongs, currentAlbum, currentIndex, isActive, isPlaying } = useSelector(state => state.player)

    //on va déclarer nos states
    const [shuffle, setShuffle] = useState(false) //etat pour le mode aléatoire
    const [repeat, setRepeat] = useState(false) //etat pour le mode répétition
    const [volume, setVolume] = useState(0.3) //etat pour le volume
    const [duration, setDuration] = useState(0) //pour la durée de la chanson
    const [seekTime, setSeekTime] = useState(0) //pour récupérer la position de la barre (si on deplace le curseur de lecture manuellement)
    const [appTime, setAppTime] = useState(0) // temps actuel de la chanson

    //on récupère les hooks 
    const dispatch = useDispatch();

    useEffect(() => {
        //si le store contient un tableau de chanson on dispatch playPause a true
        if (currentSongs.length) dispatch(playPause(true))
    }, [currentIndex]) //si currentIndex change => on reload le composant

    //méthode pour mettre pause ou play
    const handlePlayPause = () => {
        //si on a aucune chanson active on return
        if (!isActive) return;
        //on dispatch playPause avec l'inverse de isPlaying
        // isPlaying ? dispatch(playPause(false)) : dispatch(playPause(true))
        dispatch(playPause(!isPlaying))
    }

    //méthode pour avancer a la chanson suivante
    const handleNextSong = () => {
        //si on n'est pas en mode aléatoire
        if (!shuffle) {
            dispatch(nextSong(currentIndex + 1) % currentSongs.length)
        } else {
            dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)))
        }
    }

    //méthode pour revenir a la chanson précédente
    const handlePrevSong = () => {
        if (currentIndex === 0) {
            //si l'index est a 0 on doit récuperer le dernier element du tableau
            dispatch(prevSong(currentSongs.length - 1))
        } else if (shuffle) {
            dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)))
        } else {
            dispatch(prevSong(currentIndex - 1))
        }
    }

    return (
        <div className='relative sm:px-12 px-8 w-full flex items-center justify-between'>
            <Track
                isPlaying={isPlaying}
                isActive={isActive}
                currentAlbum={currentAlbum}
                activeSong={activeSong}
            />
            <div className='flex flex-1 flex-col items-center justify-center'>
                <Controls
                    isPlaying={isPlaying} //savoir si le titre est en cours de lecture
                    currentSongs={currentSongs} //tableau de chanson en cours de lecture
                    handlePlayPause={handlePlayPause} //méthode pour mettre pause ou play
                    handleNextSong={handleNextSong} //méthode pour avancer a la chanson suivante
                    handlePrevSong={handlePrevSong} //méthode pour revenir a la chanson
                    shuffle={shuffle} //etat pour le mode aléatoire
                    setShuffle={setShuffle} //setter pour le mode aléatoire
                    repeat={repeat} //etat pour le mode répétition
                    setRepeat={setRepeat} //setter pour le mode répétition
                />
                <SeekBar
                value={appTime} //pour le temps actuel
                min={0} //pour le temps actuel
                max={duration} //pour la durée de la chanson
                onInput={(e) => setSeekTime(e.target.value)} //pour récupérer la position de la barre
                setSeekTime={setSeekTime} //setter pour la position de la barre
                />
                <Player/>
            </div>
        </div>
    )
}

export default MusicPlayer