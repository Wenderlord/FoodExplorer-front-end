/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

const AuthContext = createContext({})
import AlertCard from "../components/alertCard";

// eslint-disable-next-line react/prop-types
function AuthProvider({children}){
    
    const [data,setData] = useState({})
    const [loading,setLoading] = useState(false)


    async function signIn({email,password}){
        
        setLoading(true)

       try{
        const response = await api.post("/sessions", {email, password})
        const {user, token} = response.data
        
        api.defaults.headers.common['authorization'] = `Bearer ${token}`
        setData({user, token})

        localStorage.setItem("@foodExplorer:user", JSON.stringify(user))
        localStorage.setItem("@foodExplorer:token", token)

       }catch(error){
            setLoading(false)
            if(error.response){
                toast.dark(error.response.data.message)
                {AlertCard}
               
            }else{
                toast.dark("Não foi possível entrar")
                
            }
       }
    }
    async function signOut(){
            localStorage.removeItem("@foodExplorer:token")
         localStorage.removeItem("@foodExplorer:user")
         setLoading(false)
         setData({})

    }

    useEffect(()=>{
        const token = localStorage.getItem("@foodExplorer:token")
        const user = localStorage.getItem("@foodExplorer:user")
        if(token && user){
            api.defaults.headers.common['authorization'] = `Bearer ${token}`
            
            setData({
                token,
                user: JSON.parse(user)
            })
        }
       

    }, [])
    

   
  
    return(
        <AuthContext.Provider value={{
            signIn, 
            signOut,
            user: data.user,
            isLoading:loading,
            
            }}>
        {children}
      </AuthContext.Provider> 
    )
}

function useAuth(){
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth}