import { Container, Content} from "./styles";
import ContainerContent from "../../components/ContainerContent";
import Banner from "../../components/Banner";
import MySwiper from "../../components/Swiper";
import Section from "../../components/Section";
import LoadingCard from "../../components/loadingComponents/titleLoading";
import { SwiperSlide } from "swiper/react";
import ProductCard from "../../components/DishCard";
import ContainerDishesNull from "../../components/ContainerDishesNull";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import imagePlaceholder from "../../assets/image-3.png"
import { ToastContainer } from "react-toastify";
import LoadingScreen from "../../components/loadingComponents/loadingScreen";

//import { useAuth } from "../../hooks/auth";
export default function Home(){

const [products, setProducts] = useState([])
const [loading, setLoading] = useState(false)
const [categories, setCategories] = useState([])
const [favorite, setFavorite] = useState()



const [favoriteDishes, setFavoriteDishes] = useState([]) 

useEffect(() =>{
    async function fetchFavoriteDishes(){

        const {data} = await api.get("/favoriteDishes")
        
        setFavoriteDishes(data)
        
     }
     fetchFavoriteDishes()
     setFavorite(false)
},[favorite])

useEffect(()=>{
    
    async function fetchProducts(){
        const {data} = await api.get(`/products?title=&tags=`)
        setProducts(data)
        if(data){
            setLoading(true)
        }
    }
    fetchProducts()
    
},[])

useEffect(() =>{
    async function fetchCategories(){
        const {data} = await api.get("/categories/")
        setCategories(data.categories)   
    }

fetchCategories()
}, [])

console.log(products)
//console.log(categories)

    return(
        <>
        <LoadingScreen
        isLoading={!products}/>

        <Container>
            <Content>
                <ContainerContent>
                <Banner/>
                  
                 {
                    loading ?
                    categories.map(category =>{
                        const filteredDishes = products.filter(dish => dish.category === category.category_name)


                        let centeredDishesCard = false

                        if(filteredDishes.length <= 3){
                             
                            centeredDishesCard = true

                
                        }
                        
                       return (

                           (products && filteredDishes == 0) ?  
                           
                            "":""
                           | 
                           
                           filteredDishes == 0 ?
                            
                            <Section
                            key={String(category.id)}
                            title={category.category_name}
                            >
                                <ContainerDishesNull/>

                            </Section>
                            
                            :

                            <Section
                        key={String(category.id)}
                        title={category.category_name}
                        >
                        <MySwiper
                        minCards={centeredDishesCard}
                        >

                        {
                         
                       
                        filteredDishes.map(product =>{
                           

                            const imageURL = product.Image
                            ? `${api.defaults.baseURL}/files/${product.Image}`
                            : imagePlaceholder

                            const idFavorite = favoriteDishes.filter(fav => fav.product_id === product.id)
                          

                           return(( 
                           <SwiperSlide 
                           key={String(product.id)}
                           >
                            <ProductCard
                            data={product}
                            imageURL= {imageURL ? imageURL : ""}
                            isFavorite={idFavorite}
                            setFavorite={e => setFavorite(e)}
                            
                            />
                            </SwiperSlide>
                            ))}
                            )
                            
                        }   
                        </MySwiper> 
                        </Section>
                      
                       )
                      
                    })
                    :
                
                    <Section>
                    <MySwiper
                    minCards={3}
                    >

                     {
                        Array.from({length: 3}).map((_,index)=>(
                            <SwiperSlide 
                            key={index}
                            >
                             <LoadingCard/>
                             </SwiperSlide>
                        ))
                     }

                    </MySwiper> 
                    </Section>
                   
                   }
                  
                </ContainerContent>
            </Content>
        </Container>

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