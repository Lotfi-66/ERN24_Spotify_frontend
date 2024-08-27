import React, { useState } from 'react'
import { userAuthContext } from '../contexts/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { dataAlbumNav, dataUserNav, imgLogo, styleIcon } from '../constants/appConstant';
import NavLinks from './NavLinks';

const Sidebar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const { userId, signOut } = userAuthContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut();
        navigate('/');
    }

    return (
        <>
            {/*navbar pour la vue au dessus de 768px*/}
            <div className='hidden md:flex flex-col w-(240px) py-10 px-4 bg-black justify-between'>
                <div>
                    <img
                        src={imgLogo}
                        alt="Logo Spotify"
                        className='w-full h-14 object-contain'
                    />
                    <NavLinks marginTop={'mt-5'} array={dataAlbumNav} />
                    <NavLinks marginTop={'mt-10'} array={dataUserNav} />
                </div>
            </div>
        </>
    )
}

export default Sidebar