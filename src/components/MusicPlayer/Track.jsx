import React from 'react'
import { ALBUM_URL } from '../../constants/apiConstant';

//déstructuration de activeSong, isActive, isPlaying, currebtAlbum 
const Track = ({isPlaying,isActive,currentAlbum,activeSong}) => {
    console.log('AAAAAA',activeSong);
    console.log('BBBBBB',currentAlbum);
    

    //on déclare nos constantes 
    const imgPath = `${ALBUM_URL}/${currentAlbum?.imagePath}`;
    const title = activeSong?.title ?? 'Titre inconnu'
    const artistName = activeSong?.artist?.name ?? 'Artiste inconnu'
    const albumName = currentAlbum?.title ?? 'Inconnu'
    
    
    
    
    return (
        <div className="flex flex-1 items-center justify-start">
            <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
                <img
                    src={imgPath}
                    alt={`image de l'album ${albumName}`}
                    className="rounded-full"
                />
            </div>
        </div>
    )
}

export default Track