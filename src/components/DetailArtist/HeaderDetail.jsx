import React from 'react'
import { ARTIST_URL, IMAGE_URL } from '../../constants/apiConstant'

const HeaderDetail = ({ dataArtist }) => {
    //on declare une constante pour l'image
    const imgPath = dataArtist?.imagePath
        ? `${ARTIST_URL}/${dataArtist?.imagePath}`
        : `${IMAGE_URL}/artist.png`

    const name = dataArtist?.name ?? 'artiste inconnu';

    return (
        <div className="bg-gradient-to-b from-green_top to-transparent p-5 w-full flex items-center">
            <img
                src={imgPath}
                alt={`image de ${name}`}
                className='w-40 h-40 rounded-full object-cover border-4 border-black'
            />
            <div className="ml-10 flex flex-col justify-end">
                <h1 className="text-3xl lg:text-5xl font-bold text-white my-7">{name}</h1>
            </div>
        </div>
    )
}

export default HeaderDetail