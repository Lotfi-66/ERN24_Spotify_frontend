import React from 'react'
import { ALBUM_URL, ARTIST_URL } from '../../constants/apiConstant'

const HeaderInfo = ({dataAlbum}) => {

    //on récupère la photo de l'artiste si elle existe sinon on affiche la photo de l'album
    const imgPath = dataAlbum?.artist?.imagePath 
    ?`${ARTIST_URL}/${dataAlbum?.artist?.imagePath}`
    :`${ALBUM_URL}/${dataAlbum?.imagePath}`;

    //on récupère l'année de sortie de l'album
    const releaseDate = new Date(dataAlbum?.releaseDate).getFullYear() ?? 'Date inconnue';


    return (
        <div>HeaderInfo</div>
    )
}

export default HeaderInfo