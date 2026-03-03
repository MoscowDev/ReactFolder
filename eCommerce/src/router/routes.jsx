import {createBrowserRouter} from "react-router"
import Login from "../../components/auth/login/Login";
import Register from "../../components/auth/register/Register";
import Products from "../../components/products/Products";
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
    path: "/products",
    element:<Products/>
}

  
])
export default router;