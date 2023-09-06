import { Select, DropDownMenu} from "./styles";
import {FiChevronDown} from "react-icons/fi"
import { useState, useEffect, Children } from "react";
import { api } from "../../services/api";

export  default function CategoryOptions({title, className, children, value, ...rest}){

     const [hideMenu, setHideMenu] = useState("hide")
  
     const [transitionCherevon, setTransitionCherevon] = useState("")
     
        

    function HideMenu (){

        if(hideMenu == ""){
            setHideMenu("hide")
            setTransitionCherevon("")
        }
        if(hideMenu == "hide"){
            setHideMenu("")
            setTransitionCherevon("open")
        }
    }
    
    return(

        <Select className={className} >
            {title}
            <div
            onClick={HideMenu}
            >
                <input
                value={value ?  value : "Selecione a categorias"}
                {...rest}
                /> 
                <FiChevronDown className={transitionCherevon}/>

            <DropDownMenu className={hideMenu}>
              {children}
            </DropDownMenu>
            </div>
        </Select>
    )
}