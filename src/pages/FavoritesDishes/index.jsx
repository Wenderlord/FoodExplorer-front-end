import { FavCard, ContentFav } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../../components/loadingComponents/loadingScreen";
import ContainerContent from "../../components/ContainerContent";
import Section from "../../components/Section"



export default function FavoriteDishes(){
const navigate = useNavigate ()
const [products, setProducts] = useState([])
const [hideAnimation, setHideAnimation] = useState()
const [favoriteDishes, setFavoriteDishes] = useState([])
//const [search, setSearch] = useState("")

const fetchFavoriteDishes = async ()  => { 
    const {data} = await api.get(`/favoriteDishes`)
    setFavoriteDishes(data)}

useEffect(()=>{
    
    async function fetchProducts(){

        const response = await api.get(`/products?title=&tags=`)
        setProducts(response.data)
    }
    fetchProducts()
    fetchFavoriteDishes()

},[])




console.log(favoriteDishes)
async function handleRemoveFavorite(id){
    
    const isConfirm = confirm("Tem certeza que deseja remover?")

    if(isConfirm) {
    setHideAnimation(id)
    await api.delete(`/favoriteDishes/${id}`)
    fetchFavoriteDishes()
}
}

function handleDishDetails(id){

    navigate(`/FoodInfo/${id}`)
}                    


    return(
            <>
        <LoadingScreen
        isLoading={!products}/>
            <ContainerContent>
               
               <Section
               title="Meus Favoritos"
               >
                    <ContentFav>
                  

                   {
                       favoriteDishes.map(favDish =>{
                           const filteredDishes = products.filter(dish => dish.id === favDish.product_id)
                           

                         
                           let imageURL 
                           
                           filteredDishes.map(dish =>(
                               
                                imageURL = `${api.defaults.baseURL}/files/${dish.Image}`


                               ))
                               
                               
                           return(
                           <FavCard
                           key={String(favDish.id)}
                           className={favDish.id === hideAnimation ? "remove" : "show"}
                           >
                           <img src={imageURL} alt="" 
                           loading="lazy"
                           onClick={() => handleDishDetails(favDish.product_id)}
                           />
   
                           <div>
                               <h4>
                                   {favDish.fav_dish_name}
                               </h4>
                               <span
                               onClick={() => handleRemoveFavorite(favDish.id)}
                               >
                                   Remover dos favoritos
                               </span>
                           </div>
                       </FavCard>
                       )}
                       )
                   }
                   </ContentFav>
               </Section>
             
               
               </ContainerContent>
           
            </>
                
                
        
            

    )
}