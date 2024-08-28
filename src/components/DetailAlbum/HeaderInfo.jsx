import React from 'react'
import { ALBUM_URL, ARTIST_URL } from '../../constants/apiConstant'
import { Link } from 'react-router-dom';

const HeaderInfo = ({ dataAlbum }) => {

    //on récupère la photo de l'artiste si elle existe sinon on affiche la photo de l'album
    const imgPath = dataAlbum?.artist?.imagePath
        ? `${ARTIST_URL}/${dataAlbum?.artist?.imagePath}`
        : `${ALBUM_URL}/${dataAlbum?.imagePath}`;

    //on récupère l'année de sortie de l'album
    const releaseDate = new Date(dataAlbum?.releaseDate).getFullYear() ?? 'Date inconnue';

    //on récupère le nombre de pistes de l'album
    const nbTitle = () => {
        if (dataAlbum?.songs?.length == 1) {
            return `${dataAlbum?.songs?.length} titre`
        } else if (dataAlbum?.songs?.length > 1) {
            return `${dataAlbum?.songs?.length} titres`
        } else {
            return 'Aucune piste'
        }
    }

    //Mini composant pour afficher le point separateur 
    const Dot = () => (<span> &#8226; </span>)

    //traitement de la durée de l'album addition des durations des pistes hh:mm:ss ou mm:ss
    const durationAlbum = () => {
    //on va calculer le nombre de secondes dans l'album
        const totalSecond = dataAlbum?.songs && dataAlbum?.songs.map(function(titre) {
            return parseInt(titre.duration)
        }).reduce(function(a, b) {
            return a + b
        }, 0)
        //on va convertir le nombre de secondes en hh:mm:ss
        const hours = Math.floor(totalSecond / 3600);
        const minutes = String(Math.floor((totalSecond - (hours * 3600)) / 60)).padStart(2, '0');
        const seconds = String(totalSecond % 60).padStart(2, '0');

        //on va maintenant retourner une string sous la forme hh:mm:ss ou mm.ss
        return hours > 0
        ? `${hours}h${minutes}${seconds}`
        : `${minutes} min ${seconds} s`
    }

    return (
        <div className="flex items-center">
            <Link to={'#'}>
            <img 
            src={imgPath} 
            alt={`image de l'artiste ${dataAlbum?.artist?.name} ?? Artiste inconnu`}
            className='w-10 h-10 rounded-full object-cover'
            />
            </Link>
            <p className='font-bold text-base p-1'>{dataAlbum?.artist?.name ?? 'Artiste inconnu'}</p>
            <Dot />
            <p className='font-bold text-base p-1'>{releaseDate}</p>
            <Dot />
            <p className='font-bold text-base p-1'>{nbTitle()}</p>
            <Dot />
            <p className='font-bold text-base p-1'>{durationAlbum()}</p>
        </div>
    )
}

export default HeaderInfo