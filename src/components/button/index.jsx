/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { LuLoader2 } from "react-icons/lu";

export default function Button({title,icon: Icon, children, btn, className, disabled = false,...rest}){

 if(btn == "primary"){
    btn = 'btnPrimary'
 }
 else if (btn == 'secondary'){
    btn = "btnSecondary"
 }
 else if (btn == 'dark'){
    btn = "btnDark"
 }
 else if (btn == 'transparent'){
    btn = "btnTransparent"
 }
 else if (btn == 'borderTransparent'){
   btn = "btnTransparentWithBorder"
}
    return(
        <>
      
        <Container
        className={`${btn} ${className}`}
        {...rest}
        disabled={disabled}
        >
         {Icon && <Icon size={25}/>}
          {disabled && <LuLoader2 className="loading"/>}         
          {disabled ? "carregando" : title}
          {children}
        </Container>
       
        </>
    )
}