import React, { useState } from 'react'
import { BsPauseCircleFill, BsPlayCircleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setActiveAlbum, setActiveSong } from '../../redux/player/playerSlice';
import PlayPause from '../PlayPause';
import { AiFillHeart, AiFillInfoCircle, AiOutlineHeart, AiOutlineInfoCircle } from 'react-icons/ai';
import { styleIcon } from '../../constants/appConstant';
import InfoCollapse from './InfoCollapse';
import { Collapse } from 'react-collapse';

const ToolbarDetail = ({ dataAlbum }) => {
    //on redéfinit nos constantes
    const data = dataAlbum;
    const songs = dataAlbum?.songs;

    //on déclare nos states
    const [index, setIndex] = useState(0);
    const [isColllapsed, setIsCollapsed] = useState(false);
    const [isInList, setIsInList] = useState(false);

    //on récupère les hooks
    const dispatch = useDispatch();

    //on récupère les données des slices
    const { isPlaying, activeSong } = useSelector((state) => state.player);

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
    const toggleFavorite = () => {
        setIsInList(!isInList);
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