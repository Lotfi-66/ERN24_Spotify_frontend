import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { USER_INFOS } from './constants/appConstant'
import { IMAGE_URL} from './constants/apiConstant'
import { checkUser } from './services/userService'
import { userAuthContext } from './contexts/AuthContext'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import { useSelector } from 'react-redux'
import MusicPlayer from './components/MusicPlayer'

const App = () => {
  const userInfo = JSON.parse(localStorage.getItem(USER_INFOS));
  const { signOut } = userAuthContext();
  const navigate = useNavigate();
  const { activeSong } = useSelector((state) => state.player);

  const fetchUser = async () => {
    const user = await checkUser(userInfo);
    if (user) {
      return
    } else {
      signOut();
      navigate('/');
    }
  }

  useEffect(() => {
    fetchUser();
  }, [userInfo])

  // Nouvelle useEffect pour configurer le favicon
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = `${IMAGE_URL}/logo2.png`;
    }
  }, []);

  return (
    <>
      <div className='relative flex'>
        <Sidebar />
        <div className='flex flex-1 flex-col bg-gradient-to-b from-black to-[rgb(18,18,18)]'>
          <Topbar />
          <div className='h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse'>
            <div className='flex-1 h-fit pb-40 text-white'>
              <Outlet />
            </div>
          </div>
        </div>
        {activeSong?.title && (
          <div className="absolute h-28 bottom-0 left-0 right-0 animate-slideup bg-gradient-to-br from-white_01 to-black backdrop-blur-lg rounded-t-3xl z-10">
            <MusicPlayer/>
          </div>
        )}
      </div>
    </>
  )
}

export default App