import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import store from "./redux/store.js";
import OnlineRouter from './router/OnlineRouter.jsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <RouterProvider router={OnlineRouter} />
    </Provider>
  </StrictMode>,
)