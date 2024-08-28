import React from 'react'
import { BsPauseCircleFill, BsPlayCircleFill } from 'react-icons/bs'

const PlayPause = ({
    size = '60px', //permet de definir la taille du bouton (par default 60px)
    isPlaying, //permet de savoir si le player est en cours de lecture
    songs, //tableau de chansons
    activeSong, //chanson en cours de lecture
    handlePause, //fonction pour arreter le player
    handlePlay, //fonction pour lancer le player
    index //index de la chanson en cours de lecture
}) => {
    return (
        //on check si on est en cours de lecture
        //si le titre de la chanson en cours de lecture (activeSong) correspond au titre de la chanson dans le tableau(songs) a l'index donné (index)
        isPlaying && activeSong?.title === songs[index]?.title ?
        //si vrai : on retourne l'icone pause avec la methode handlePause
        <BsPauseCircleFill 
        size={size}
        className='text-green shadow-md cursor-pointer'
        onClick={handlePause}
        />
        :
        <BsPlayCircleFill 
        size={size}
        className='text-green shadow-md cursor-pointer'
        onClick={handlePlay}
        />
    )
}

export default PlayPause