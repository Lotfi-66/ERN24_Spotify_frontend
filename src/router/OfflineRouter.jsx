import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../screens/ErrorScreens/ErrorPage";
import HomeOffline from "../screens/OfflineScreens/HomeOffline";
import Login from "../screens/OfflineScreens/Login";
import Register from "../screens/OfflineScreens/Register";


const OfflineRouter = createBrowserRouter(
    [
        {
            element: (
                <>
                    <HomeOffline />
                </>
            ),
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Login />
                },
                {
                    path: "/register",
                    element: <Register />
                },
            ]
        }
    ]
);

export default OfflineRouter