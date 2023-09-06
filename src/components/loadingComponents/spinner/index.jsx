
import { Container } from "./styles";
import { LuLoader2 } from "react-icons/lu";

// eslint-disable-next-line react/prop-types
export default function Spinner({size}){

    return(
            <Container>
           <span className="loading"><LuLoader2 size={size}/> </span> 
            </Container>
     
    )
}