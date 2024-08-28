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
    }, [dispatch]);

    // On doit récupérer les données de l'album depuis le Selector
    const { loading, albums } = useSelector(selectAlbumsData);
    //on doit récupérer les infos du player
    const {activeSong, isPlaying} = useSelector((state) => state.player);

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
                        //songs: le tableau de chansons de l'album
                        songs={data.songs}
                        // isPlaying: pour savoir si une chanson est en lecture
                        isPlaying={isPlaying}
                        //activeSong: la chanson en cours de lecture
                        activeSong={activeSong}
                        //index: l'index de la chanson en cours de lecture
                        index={0}
                        />
                    )
                }
                    
                )}
            </div>
        </div>
    );
};

export default Home;