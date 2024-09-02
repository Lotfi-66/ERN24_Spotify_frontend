import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { fetchUserDetail } from '../../../redux/user/userSlice';
import { selectUserData } from '../../../redux/user/userSelector';
import { AVATAR_URL, IMAGE_URL } from '../../../constants/apiConstant';
import PageLoader from '../../../components/Loader/PageLoader';
import { BsFillPencilFill } from 'react-icons/bs';

const Account = () => {

    const params = useParams();
    const userId = params.id;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserDetail(userId));
    }, [])

    const { loading, userDetail } = useSelector(selectUserData);
    console.log('userDetail', userDetail);


    //on récupère l'image de l'utilisateur dans ue constante
    const imgUser = userDetail?.avatar?.imagePath
        ? `${AVATAR_URL}/${userDetail?.avatar?.imagePath}`
        : `${IMAGE_URL}/user.png`;

    const nickname = userDetail?.nickname ?? 'utilisateur inconnu'
    const email = userDetail?.email ?? 'utilisateur inconnu'


    return (
        loading ? <PageLoader /> :
            <div className='flex flex-col justify-center items-center'>
                <h1 className='test-4xl font-bold mb-5'>Mon compte</h1>
                <div className="flex flex-col justify-center items-center">
                    <div className="relative w-40 h-40 flex flex-col">
                        <img
                            src={imgUser}
                            alt="avatar utilisateur"
                            className='w-40 h-40 rounded-full object-contain'
                        />
                        <Link
                            to={`/edit-avatar`}
                            className='absolute bottom-0 right-0 border rounded-full p-2 cursor-pointer hover:bg-green_top'
                        >
                            <BsFillPencilFill size={20} />
                        </Link>
                    </div>
                </div>
                <div className="relative w-80 h-auto border rounded-lg flex flex-col items-center my-5 pb-10">
                <p className="text-xl font-bold mt-5">Pseudo : {nickname}</p>
                <p className="text-xl font-bold mt-5">Adresse email : {email}</p>
                <p className="text-xl font-bold mt-5">Mot de passe : ********</p>
                <Link
                    to={`/edit-info`}
                    className='absolute bottom-0 right-0 border rounded-full p-2 cursor-pointer hover:bg-green_top'
                >
                    <BsFillPencilFill size={20} />
                </Link>
                </div>
            </div>
    )
}

export default Account