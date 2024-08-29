import React from 'react'
import { ALBUM_URL } from '../../constants/apiConstant';

const Track = ({ isPlaying, isActive, activeSong, currentAlbum }) => {

    //on déclare nos constantes
    const imgPath = `${ALBUM_URL}/${currentAlbum?.imagePath}`;
    const title = activeSong?.title ?? 'Musique sans titre';
    const artistName = currentAlbum?.artist?.name ?? 'Artiste inconnu';
    const albumName = currentAlbum?.title ?? 'inconnu';

    return (
        <div className='flex flex-1 items-center justify-start'>
            <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4 `}>
                <img
                    src={imgPath}
                    alt={`Image de l'album ${albumName}`}
                    className='rounded-full'
                />
            </div>
            <div className='w-[50%]'>
                <p className='truncate text-white font-bold text-lg'>
                    {title}
                </p>
                <p className='truncate text-gray-500'>
                    {artistName}
                </p>
            </div>
        </div>
    )
}

export default Track