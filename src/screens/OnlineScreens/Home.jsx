import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../../redux/albums/albumSlice.js";
import { selectAlbumsData } from "../../redux/albums/albumSelector.js";

const Home = () => {
    // On récupère le hook de react redux qui permet de récupérer les actions
    const dispatch = useDispatch();

    // On veut des le montage du composant, récupérer les albums
    useEffect(() => {
        dispatch(fetchAlbums());
    }, []);

    // On doit récupérer les données depuis le Selector
    const { loading, albums } = useSelector(selectAlbumsData)
    console.log(albums)

    return (
        <div>
            Home
        </div>
    );
};

export default Home;