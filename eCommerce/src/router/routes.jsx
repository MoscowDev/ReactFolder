import {createBrowserRouter} from "react-router"
import Login from "../../components/auth/login/Login";
import Register from "../../components/auth/register/Register";
const router = createBrowserRouter([
    {
        path: "/login",
        element:<Login/>

    },
    {
        path: "/register",
        element:<Register/>
    },
    {
        path: "/",
        element:<Register/>
    }
  
])
export default router;