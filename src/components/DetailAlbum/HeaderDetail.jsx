import React from 'react'
import { ALBUM_URL } from '../../constants/apiConstant';
import HeaderInfo from './HeaderInfo';

const HeaderDetail = ({dataAlbum}) => {
    //on déclare une constante a l'image de l'album
    const imgPath = `${ALBUM_URL}/${dataAlbum?.imagePath}`;


    return (
        <>
        <div className="bg-gradient-to-b from-green_top to-transparent p-5 w-full flex items-center">
            <img 
            src={imgPath} 
            alt={`L'image de l'album ${dataAlbum?.title}`}
            className='w-48 h-48 rounded-full object-cover'
            />
            <div className='ml-10 flex flex-col justify-end'>
            <h1 className="text-5xl font-bold text-white my-7">{dataAlbum?.title}</h1>
            <HeaderInfo dataAlbum={dataAlbum} />
            </div>
        </div>
        </>
    )
}

export default HeaderDetail