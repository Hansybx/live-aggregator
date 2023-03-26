import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/home"
import LiveRoom from "./pages/liveRoom";


const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },{
        path:"liveRoom",
        element: <LiveRoom />
    }
]);

export default routers;