import {createBrowserRouter} from "react-router"
import Login from "../../components/auth/login/Login";
import Register from "../../components/auth/register/Register";
import Products from "../../components/products/Products";
import LandingPage from "../../components/pages/LandingPage";

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
    
},
{
    path: "/LandingPage",
    element:<LandingPage/>
}

  
])
export default router;