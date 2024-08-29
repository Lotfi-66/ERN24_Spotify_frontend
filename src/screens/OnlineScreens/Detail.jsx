import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectAlbumsData } from '../../redux/albums/albumSelector';
import { fetchAlbumDetail } from '../../redux/albums/albumSlice';
import DetailAlbum from '../../components/DetailAlbum';
import PageLoader from '../../components/Loader/PageLoader';

const Detail = () => {
    //on va appeler le hook useParams pour récupérer l'id de l'album
    const params = useParams();
    const id = params.id;
    //on récupère le hook use Dispatch pour pouvoir appeler nos fonctions dans redux
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAlbumDetail(id))
    }, [])

    //on récupère les données de l'albums depuis le selector
    const {loading, albumDetail} = useSelector(selectAlbumsData);
    // console.log(albumDetail);

    return (
        loading ? <PageLoader /> :
        <DetailAlbum dataAlbum={albumDetail} />
    )
}

export default Detail