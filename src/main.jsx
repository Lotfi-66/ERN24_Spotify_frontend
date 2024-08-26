import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import store from "./redux/store.js";
import OnlineRouter from './router/OnlineRouter.jsx';
import { RouterProvider } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* on enregistre le context d'authentification */}
    <AuthContextProvider>
    {/* on enregistre le store */}
      <Provider store={store}>
    {/* on enregistre le router */}
        <RouterProvider router={OnlineRouter} />
      </Provider>
    </AuthContextProvider>
  </StrictMode>,
)