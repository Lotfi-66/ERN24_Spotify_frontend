import React from 'react'
import { ALBUM_URL } from '../../constants/apiConstant';
import { useSelector } from 'react-redux';
import { selectArtistData } from '../../redux/artist/artistSelector';

const Track = ({ isPlaying, isActive, activeSong, currentAlbum, artist = 'Artiste inconnu' }) => {


    const {artistDetail} = useSelector(selectArtistData);
    //on déclare nos constantes
    const imgPath = `${ALBUM_URL}/${currentAlbum?.imagePath}`;
    const title = activeSong?.title ?? 'Musique sans titre';
    const albumName = currentAlbum?.title ?? 'inconnu';
    const artistName = currentAlbum?.artist?.name //on regarde si on a un artiste dans l'album
    ? currentAlbum?.artist?.name
    : artistDetail?.name
    ? artistDetail?.name
    :artist;

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