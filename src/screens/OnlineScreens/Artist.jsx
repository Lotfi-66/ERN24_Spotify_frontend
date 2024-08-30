import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchArtistDetail } from '../../redux/artist/artistSlice';
import { selectArtistData } from '../../redux/artist/artistSelector';

const Artist = () => {
    //on va appeler le hook useParams pour récupérer l'id de l'artiste
    const params = useParams();
    const artistId = params.id;
    console.log(artistId);
    
    //on va appeler le hook useDispatch pour pouvoir exectuer nos fonstion des slices
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArtistDetail(artistId));
    }, [])

const { loading, artistDetail } = useSelector(selectArtistData);
console.log(artistDetail)

    return (
        <div>Artist</div>
    )
}

export default Artist