import { AddToCard, Content, Stepper, FoodContent, ContentTags} from "./styles";
import ContainerContent from "../../components/ContainerContent";

import Button from "../../components/button"
import {FiPlus, FiMinus, FiChevronLeft, FiAlertCircle} from "react-icons/fi"
import { useState, useEffect } from "react"
import Section from "../../components/Section";
import Tags from "../../components/Tags";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import imgPlaceHolder  from "../../assets/PlaceHolderDish.svg"
import { toast, ToastContainer } from "react-toastify";
import LoadingScreen from "../../components/loadingComponents/loadingScreen";

export default function FoodInfo(){
    const{user} = useAuth()

    const [count, setCount] = useState(0)
    const[totalPrice, setTotalPrice] = useState(0)
    const[data, setData] = useState(null)

    const navigate = useNavigate ()
    const params = useParams()

    const imageURl = data && `${api.defaults.baseURL}/files/${data.Image}`;
    const price = data && Number(data.price)

    useEffect(() =>{
        async function fetchProduct(){
            const response =  await api.get(`/products/${params.id}`)
            setData(response.data)
        }
        fetchProduct()
    },[params.id])
        


    function handleBack(){

        navigate ("/")
    }
    function HandleCountAdd(){
        
        setCount(count + 1)
        
        const total = totalPrice + price

        setTotalPrice(total)
    }

    function HandleCountRemove(){
        
        const total = totalPrice == 0 ? 0 : totalPrice - price

        setTotalPrice(total)

        count == 0 ? 0 : setCount(count - 1)
    }
    function handleEditDish(id){
        navigate(`/editDish/${id}`)
    }
    async function handleAddItensToCart(){
        if(!count){
            return toast(` insira uma quantidade para adicionar ao carinho`, {
                icon: FiAlertCircle
            })
        }
        const cartItem = {
            title: data.title,
            quantity: count,
            price: data.price,
            product_id: data.id
        }
        await api.post("/cart", cartItem)
        .then(toast.success("Adicionado com Sucesso !"))
        .catch((error) => {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            toast("Erro ao cadastrar Prato");
          }
        });

    }
    return(
        <>
            <LoadingScreen
            isLoading={!data}
            />
            {
                data && 
                <Content>
                <ContainerContent>
                        <Button
                        title="voltar"
                        btn="transparent"
                        icon={FiChevronLeft}
                        onClick = {handleBack}
                        />
                

                    <FoodContent>
                        <div>
                            <img src={data.Image ? imageURl : imgPlaceHolder} alt="" />
                        </div>
                        <div>
                        <Section
                    title={data.title}
                    >
                        <p>{data.description}</p>
                      {
                        data.tags &&

                        <ContentTags>
                            {
                                data.tags.map(tags => (
                                    <Tags
                                    key={String(tags.id)}
                                    title={tags.name}
                                    />
                                ))
                            }
                    </ContentTags>
                      }
                        </Section>
                        <Section>
                        <AddToCard>
                            {
                                user.isAdmin ?

                                <Button
                                title="Editar Prato"
                                btn="primary"
                                onClick={() => handleEditDish(data.id)}
                                />

                                :  
                                
                        <>                     
                            <div>
                                
                            <Stepper>
                                <Button
                                icon={FiMinus}
                                btn="transparent"
                                onClick={HandleCountRemove}
                                />
                                <span>{count}</span>
                                <Button
                                icon={FiPlus}
                                btn="transparent"
                                onClick={HandleCountAdd}
                                />
                            </Stepper>
                            </div>
                            <div>
                                <Button
                                title={`incluir • R$ ${Number(totalPrice).toFixed(2).replace('.',',')}`}
                                btn="primary"
                                onClick={handleAddItensToCart}
                                />
                            </div>
                         </>
                      }
                       </AddToCard>
                        </Section>
                       
                        </div>
                    </FoodContent>
                   
                </ContainerContent>
              
              
            </Content>
            
            }
    
        <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
</>
    )
}