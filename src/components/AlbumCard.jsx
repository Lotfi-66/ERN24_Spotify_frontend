import React from 'react'
import { ALBUM_URL } from '../constants/apiConstant'
import { Link } from 'react-router-dom';

const AlbumCard = ({ data }) => {
    //constante pour récupérer l'image de l'album
    const imgPath = `${ALBUM_URL}/${data.imagePath}`;
    //on redéfinit des constantes pour les données de l'albums
    const artistName = data?.artist?.name ?? 'Artist inconnu'
    const albumName = data?.title ?? 'Titre inconnu'
    const albumId = data?.id ?? 0

    return (
        <div className='flex flex-col w-[250px] p-4 bg-white_01 hover:bg-white_05 
        transition-all ease-out duration-500 animates-slideup rounded-lg cursor-pointer group'>
            <div className="relative w-full flex flex-col">
                <Link to={`/detail/${albumId}`}>
                <img 
                src={imgPath} 
                alt={`L'image de l'album ${albumName}`}
                className='card-sh rounded-lg object-cover h52 w-52'
                />
                </Link>
                {/* TODO: ici le bouton Play Pause */}
                <Link to={`/detail/${albumId}`}>
                <div className="mt-4 flex flex-col">
                    <p className="text-white text-xl truncate font-bold">{albumName}</p>
                    <p className="text-white text-sm truncate">{artistName}</p>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default AlbumCard