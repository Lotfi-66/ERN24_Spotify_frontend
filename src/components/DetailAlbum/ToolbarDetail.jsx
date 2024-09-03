import React, { useEffect, useState } from 'react'
import { BsPauseCircleFill, BsPlayCircleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setActiveAlbum, setActiveSong } from '../../redux/player/playerSlice';
import PlayPause from '../PlayPause';
import { AiFillHeart, AiFillInfoCircle, AiOutlineHeart, AiOutlineInfoCircle } from 'react-icons/ai';
import { styleIcon } from '../../constants/appConstant';
import InfoCollapse from './InfoCollapse';
import { Collapse } from 'react-collapse';
import { useAuthContext } from '../../contexts/AuthContext';
import { selectUserData } from '../../redux/user/userSelector';
import { fetchUserFavorite } from '../../redux/user/userSlice';
import { fetchAddRemoveFavorite } from '../../services/favoriteService';
import PageLoader from '../Loader/PageLoader';

const ToolbarDetail = ({ dataAlbum }) => {
    //on redéfinit nos constantes
    const data = dataAlbum;
    const songs = dataAlbum?.songs;
    //on récupère l'id de l'utilisateur
    const {userId} = useAuthContext();
    const albumId = dataAlbum?.id;

    //on déclare nos states
    const [index, setIndex] = useState(0);
    const [isColllapsed, setIsCollapsed] = useState(false);
    const [isInList, setIsInList] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [listArray, setListArray] = useState([]);

    //on récupère les hooks
    const dispatch = useDispatch();

    //on récupère les données des slices
    const { isPlaying, activeSong } = useSelector((state) => state.player);
    const {loading, userFavorite} = useSelector(selectUserData);
    
    useEffect(() => {
        dispatch(fetchUserFavorite(userId));
    }, [dispatch ,userId]);
    
    useEffect(() => {
        checkFavorite();
        setIsLoading(false);
    },[userFavorite,userId]);


    //méthode pour savoir si l'album l'album dans lequel ont est, est dans le tableau de favoris
    const checkFavorite = () => {
        if(userFavorite.length > 0){
            const idArray = userFavorite.map((fav)=> `/api/albums/${fav.id}`);
            setListArray([...new Set(idArray)]); //...new Set() permet de supprimer les doublons
            //if(idArray.includes(`/api/albums/${albumId}`)) setIsInList(true);
            setIsInList(idArray.includes(`/api/albums/${albumId}`));
        }
    }


    //methode lorsquon met pause
    const handlePauseClick = () => {
        dispatch(playPause(false));
    }

    //methode lorsquon met play
    const handlePlayClick = (index) => {
        dispatch(setActiveSong({ songs, data, index }));
        dispatch(setActiveAlbum({ data }));
        dispatch(playPause(true));
    }

    //méthode pour gerer les favories
    const toggleFavorite = async () => {
        setIsInList(!isInList);
        //on doit crée une copie de listArray
        let updatedListArray = [...listArray];

        if(isInList){
            //on doit supprimer l'id du tableau
            updatedListArray = listArray.filter((item)=> item !== `/api/albums/${albumId}`);
        }else{
            //on ajoute l'id au tableau
            updatedListArray.push(`/api/albums/${albumId}`);
        }
        console.log('updatedListArray', updatedListArray);
        //on appelle le service qui permet de mettre a jour les favories
        await fetchAddRemoveFavorite(updatedListArray, userId);

        //on met a jour le state
        setListArray(updatedListArray);


    }

    //méthode pour ouvrir ou fermer la collapse
    const handleCollapseClick = () => {
        setIsCollapsed(!isColllapsed);
    }

    return (
        <>
            <div className="flex item-center ml-5">
                <div className="cursor-pointer mr-3">
                    <PlayPause
                        songs={songs}
                        handlePause={handlePauseClick}
                        handlePlay={() => handlePlayClick(index)}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        index={index}
                        data={data}
                    />
                </div>
                {/* bouton favorie */}
                <div className="cursor-pointer" onClick={() => toggleFavorite()}>
                    {isInList ?
                        <AiFillHeart className="text-green m-3" style={{ fontSize: '30px' }} /> :
                        <AiOutlineHeart className="text-green m-3" style={{ fontSize: '30px' }} />}
                </div>
                {/* bouton favorie */}
                <div className="cursor-pointer" onClick={() => handleCollapseClick()}>
                    {isColllapsed ?
                        <AiFillInfoCircle className="text-green m-3" style={{ fontSize: '30px' }} /> :
                        <AiOutlineInfoCircle className="text-green m-3" style={{ fontSize: '30px' }} />}
                </div>
            </div>
            {/* on récupère les infos du collapse */}
            <div>
                <Collapse isOpened={isColllapsed}>
                    <InfoCollapse dataAlbum={dataAlbum} />
                </Collapse>
            </div>
        </>
    )
}

export default ToolbarDetail