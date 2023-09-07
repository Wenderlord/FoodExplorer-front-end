import { Container, Content, Badge} from "./styles";
import ContainerContent from "../ContainerContent";
import Search from "../Search";
import Logo from "../Logo";

import {FiLogOut, FiMenu, FiArrowLeft} from "react-icons/fi"
import Button from "../button";
import {PiReceipt, PiPlusCircleFill} from "react-icons/pi"
import {LuSalad, LuHistory, LuStar} from "react-icons/lu"
import MenuMobile from "../menuMobile";
import { useState  } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useEffect } from "react";
import { api } from "../../services/api";
//import UpdateCart from "../../hooks/updateCart";

// eslint-disable-next-line react/prop-types
export default function Header({loading}){

    const {user, signOut} = useAuth()
    const [cartItem, setCartItems] = useState([])
    const authAdmin = user && user.isAdmin

    const navigate = useNavigate()
    const [MenuMobileOn, setMenuMobileOn] = useState(false)
    document.getElementsByClassName
    
    function handleMenuMobile(){
        !MenuMobileOn ? setMenuMobileOn(true) : setMenuMobileOn(false) 
    }
    function handleCreateProduct(){
        navigate('/CreateNewProduct')
    }
    function handleFavoriteDishes(){

        navigate('/FavoriteDishes')
    }
    function handleCart(){
        navigate("/Pedidos")
    }

    function handleMobileCreateDish(){
        handleMenuMobile()
        handleCreateProduct()
    }
    
    function handleMobileFavoriteDishes(){
        handleMenuMobile()
        handleFavoriteDishes()
    }
   
    function handleSignOut(){
        signOut()
        navigate("/")
    }

    const fetchCartItems = async () => {const {data} = await api.get("/cart")
    setCartItems(data)}

    if(loading==true){
        fetchCartItems()

    }
    useEffect(() => {
        
        fetchCartItems()

    },[cartItem]) 

    return(
        <Container>
            <ContainerContent>

                <Content>
                <Button
                    icon={FiMenu}
                    btn="transparent"
                    onClick = {handleMenuMobile}
                    />
                    <MenuMobile 
                    className={MenuMobileOn ? "" : "hide"}
                    hide={handleMenuMobile}
                    >
                         <Search
                         closeMenuMobile={handleMenuMobile}
                         />

                        <Button
                        title="Meus Favoritos"
                        btn="transparent"
                        icon={LuStar}
                        onClick={handleMobileFavoriteDishes}
                        />

                        <Button
                        title="Histórico de pedidos"
                        btn="transparent"
                        icon={LuHistory}
                        
                        />
                    {
                        user && user.isAdmin ?

                        <Button
                        
                        title="Novo Prato"
                        icon={LuSalad}
                        btn="transparent"
                        onClick={handleMobileCreateDish}
                        />
                        :
                        ''
             
                    }
                    <Button
                        title="Sair"
                        icon={FiArrowLeft}
                        btn="transparent"
                        onClick ={handleSignOut}
                        ></Button>


                    </MenuMobile>
                <Logo isAdmin={authAdmin}/>

                <Search/>
                
                
               

                <Button
                title="Meus Favoritos"
                btn="transparent"
                onClick={handleFavoriteDishes}
                />
                {
            
                    <Button
                
                title="Histórico de Pedidos"
                btn="transparent"
                id="newPlate"
                >
               
                </Button>
                
                }
                   { 
                   authAdmin ?
                   <Button
                
                title={window.screen.width <= 900 ? "" : "Novo Prato"}
                icon={PiPlusCircleFill}
                btn={window.screen.width <= 900 ? "transparent" : "primary"}
                onClick={handleCreateProduct}
                >
                </Button>
                :
                   <Button
                
                title={window.screen.width <= 900 ? "" : "Pedidos"}
                icon={PiReceipt}
                btn={window.screen.width <= 900 ? "transparent" : "primary"}
                onClick={handleCart}
                >
                 <Badge className="bagdeFloat">
                    <span>
                        {cartItem.length}
                    </span>
                    </Badge> 
                </Button>
                }
                <Button
                icon={FiLogOut}
                btn="transparent"
                onClick={handleSignOut}
                />
                 
                </Content>
            </ContainerContent>
        </Container>
    )
}
