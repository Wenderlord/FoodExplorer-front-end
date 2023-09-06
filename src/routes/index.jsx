import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./AppRoute/app.routes";
import AdminRoutes from "./AdminRoute/admin.routes";
import { useAuth } from "../hooks/auth";


export default function Routes(){
    const{user} = useAuth()


    const isAdmin = user && user.isAdmin

    const route = isAdmin ? <AdminRoutes/> : <AppRoutes/>
 
    return(
        <BrowserRouter>
        {user ? route : <AuthRoutes/> }
        </BrowserRouter>
    )
}