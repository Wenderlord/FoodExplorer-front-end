import { useEffect, useState } from "react"
import {FiSearch} from "react-icons/fi"
import Input from "../Input"
import { SearchContent, Container} from "./styles"
import { useNavigate } from "react-router-dom"
import Spinner from "../loadingComponents/spinner"
import { api } from "../../services/api"

// eslint-disable-next-line react/prop-types
export default function Search({closeMenuMobile}){
    const navigate = useNavigate ()
    const [search, setSearch]= useState()
    const [isLoading, setIsLoading]= useState(false)
    const [dish, setDish]= useState([])

    const fetchSearch = async () =>{
        setIsLoading(true)

    
            const {data} = await api.get(`/products?title=${search}`)

            setDish(data)
        
        setIsLoading(false)
        
    }
    
//console.log(closeMenuMobile)
//console.log(dish)

useEffect(() =>{
    
    if(search){    
    fetchSearch()
    }
    else if(!search && dish){
        setDish([])
    }
    
    
},[search])

function handleDishDetails(id){
   
    setDish([])
    navigate(`/FoodInfo/${id}`)
    closeMenuMobile && closeMenuMobile()
    setSearch('')
}





    return(
        <Container>
              <Input
                icon={isLoading ? Spinner : FiSearch}
                placeholder="Busque por pratos ou ingredientes"
                value={search}
                type="search"
                onChange={(e) =>setSearch(e.target.value)}
                />
                
                <SearchContent>
                   {
                     dish.map(dish =>(
                        <div
                        key={String(dish.id)}
                        onClick={() => handleDishDetails(dish.id)}
                        >
                        <div>
                        <h4>{dish.title}</h4>
                        <p>{dish.description}</p>
                        </div>
                        <span>R$ {dish.price}</span>
                        </div>
                     ))
                   }
                </SearchContent>
        </Container>
    )
}