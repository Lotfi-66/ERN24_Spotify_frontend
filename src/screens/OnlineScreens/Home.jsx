import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../../redux/albums/albumSlice.js";
import { selectAlbumsData } from "../../redux/albums/albumSelector.js";
import PageLoader from '../../components/Loader/PageLoader.jsx';
import AlbumCard from '../../components/AlbumCard.jsx';

const Home = () => {
    // On récupère le hook de react redux qui permet de récupérer les actions
    const dispatch = useDispatch();

    // On veut des le montage du composant, récupérer les albums
    useEffect(() => {
        dispatch(fetchAlbums());
    }, []);

    // On doit récupérer les données depuis le Selector
    const { loading, albums } = useSelector(selectAlbumsData);
    const dataAlbum = albums['hydra:member'];

    return (
        loading ? <PageLoader/> :
        <div className='flex flex-col'>
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Tous les albums</h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {/* on va mapper sur dataAlbum  */}
                {dataAlbum && dataAlbum.map((data, index) => {
                    return (
                        <AlbumCard 
                        //on passe key en paramètre pour que chaque enfant soient unique
                        key={index}
                        //on pass data comme props de l'album
                        data={data}
                        />
                    )
                }
                    
                )}
            </div>
        </div>
    );
};

export default Home;