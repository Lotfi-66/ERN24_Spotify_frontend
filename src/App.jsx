import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { USER_INFOS } from './constants/appConstant'
import { checkUser } from './services/userService'
import { userAuthContext } from './contexts/AuthContext'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

const App = () => {

  const userInfo = JSON.parse(localStorage.getItem(USER_INFOS));

  const { signOut } = userAuthContext();

  //methode qui check si c'est le bon user sinon ont deconecte le user
  const navigate = useNavigate();

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


  return (
    <>
      <div className='relative flex'>
        <Sidebar />
        {/* TODO: ici la sidebar */}
        <div className='flex flex-1 flex-col bg-gradient-to-b from-black to-[rgb(18,18,18)]'>
          <Topbar />
          <div className='h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse'>
            <div className='flex-1 h-fit pb-40 text-white'>
              <Outlet />
            </div>
          </div>


        </div>
        {/* TODO: ici le player */}

      </div>
    </>

  )
}

export default App