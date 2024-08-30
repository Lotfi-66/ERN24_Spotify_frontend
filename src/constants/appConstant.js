import { AiOutlineAppstoreAdd, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { IMAGE_URL } from "./apiConstant";
//constante pour la clé du localstorage
export const USER_INFOS = "userInfos";

//on va construire un 1er tableau pour notre sidebar
//pour la gestion des albums 
export const dataAlbumNav = [
    {title: 'Acceuil', path:'/', icon: AiOutlineHome},
    {title: 'Recherche', path:'/search', icon: AiOutlineSearch},
    {title: 'Bibliotheque', path:'/library', icon: BiLibrary},
];

//2 : Pour les options utilisateur
export const dataUserNav = [
    {title: 'Crée une playlist', path:'/add-playlist', icon: AiOutlineAppstoreAdd},
    {title: 'Titres likés', path:'/wishlist', icon: MdFavoriteBorder},
    {title: 'Mon compte', path:'/account/:id', icon: FiSettings}, //TODO : prévoir la route
];

//3 : on récupère le chemin de notre logo
export const imgLogo = `${IMAGE_URL}/logo.png`;

//4 : on peut définir des constantes de styles
export const styleIcon = {width: '25px', height: '25px'};
export const tableIcon = {width: '20px', height: '20px'}