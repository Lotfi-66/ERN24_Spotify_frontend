import React from 'react'
import { ALBUM_URL } from '../constants/apiConstant'

const AlbumCard = ({data}) => {
    //constante pour récupérer l'image de l'album
    const imgPath = `${ALBUM_URL}/${data.imagePath}`;
    //on redéfinit des constantes pour les données de l'albums
    const artistName = data?.artist?.name ?? 'Artist inconnu'
    const albumName = data?.title ?? 'Titre inconnu'
    
    return (
        <div>{artistName}</div>
    )
}

export default AlbumCard