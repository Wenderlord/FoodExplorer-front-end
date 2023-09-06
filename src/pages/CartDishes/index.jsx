import { Content, ListCard, ContentCart, Payment, PaymentContent  } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { MdPix} from "react-icons/md"
import { AiFillCreditCard} from "react-icons/ai"

import ContainerContent from "../../components/ContainerContent";

import Section from "../../components/Section"
import pixImage from "../../assets/pixImage.svg"
import Button from "../../components/button";
import CreditCard from "../../components/CreditCard";
import LoadingScreen from "../../components/loadingComponents/loadingScreen";

export default function CartDishes(){
const navigate = useNavigate ()
const [products, setProducts] = useState([])
const [cartItem, setCartItems] = useState([])
const [payment,setPayment] = useState(false)
const [showPix, setShowPix] = useState(true)
const [showCreditCard, setShowCreditCard] = useState(false)
const [update,setUpdated] = useState(0)


useEffect(()=>{
    
    async function fetchProducts(){

        const response = await api.get(`/products?title=&tags=`)
        setProducts(response.data)
    }
    fetchProducts()
    
},[])

useEffect(() => {
    async function fetchCartItems(){
        const {data} = await api.get("/cart")
        setCartItems(data)
    }
    fetchCartItems()
},[update])

console.log(update)

async function handleRemoveItem(id){
  
    await api.delete(`/cart/${id}`)
    
    setUpdated(cartItem)
}

function handleDishDetails(id){

    navigate(`/FoodInfo/${id}`)
}                    

function handlePaymentMethod(){

    setShowPix(false)
    setShowCreditCard(true)
}
function handlePixMethod(){

    setShowCreditCard(false)
    setShowPix(true)
}
function handlePaymentSection(){

    setPayment(true)
    
}
let sum 
let total = 0
    return(
       <>
       <LoadingScreen
       isLoading={!cartItem}
       />

       <Content>
                <ContainerContent>
               
               <div className="flexContainer">
               <Section
                title="Meu Pedido"
                className={payment ? "hide": ""}
                >
                    
                    <ContentCart>
                    <div>
                       {
                        cartItem ? cartItem.map(cartItem =>{

                            const filteredDishes = products.filter(dish => dish.id === cartItem.product_id)
                            let imageURL 

                            filteredDishes.map(dish =>(
                                
                                imageURL = `${api.defaults.baseURL}/files/${dish.Image}`


                               ))
                                sum =  Number(cartItem.price) 
                                total = sum + total

                                    
                            return(
                            <ListCard
                            key={cartItem.id}
                            >
                            <img src={imageURL} alt="" 
                            
                            onClick={() => handleDishDetails(cartItem.product_id)}
                            />
                            <div>
                                <h4>{cartItem.quantity} x {cartItem.title} <span>R$ {Number(cartItem.price).toFixed(2).replace(".", ",")}</span></h4>
                                <span
                                onClick={() => handleRemoveItem(cartItem.id)}
                                >Excluir</span>
                            </div>
                        </ListCard>
                        )}
                        )
                        :
                        <p>Não tem pratos adicionados nos pedidos ainda!</p>
                       }
                      </div>

                    </ContentCart>
                    
                   <p>Total: R$ {Number(total).toFixed(2).replace(".", ",")}</p>

                   <Button
                btn="primary"
                title="Avançar"
                className="btnNext"
                onClick={handlePaymentSection}
                />
                </Section>

                <Section
                title="Pagamento"
                className= {`mobilePayment ${payment ? "":"hide"}`}>
                
  
                       <Payment>
                       
                       <Button
                        btn="transparent"
                        title="Pix"
                        className={showPix ? 'active' : ''}
                        icon={MdPix}
                        onClick ={handlePixMethod}
                        />

                         <Button
                        btn="transparent"
                        title="Credit"
                        className={showCreditCard ? 'active' : ''}
                        icon={AiFillCreditCard}
                        onClick ={handlePaymentMethod}
                        />
                     
                        <PaymentContent>
                        <div className={showPix ? '': "hide"}>
                        <img src={pixImage} alt=""/>
                        </div>
                        <div 
                        className={showCreditCard ? '':"hide"}>
                        <CreditCard/>
                        </div>
                        </PaymentContent>
                       </Payment>
                 
                </Section>
               </div>
              
               
                </ContainerContent>
               
            </Content>
       </>
           
    )
}