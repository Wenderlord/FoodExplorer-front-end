import { useState } from "react";
import { Container } from "./styles";
import { useEffect } from "react";
import Logo from "../../Logo";
import Spinner from "../spinner";
// eslint-disable-next-line react/prop-types
export default function LoadingScreen({isLoading=true}){

    const [loading, setLoading]=useState(true)

        useEffect(()=>{
        setLoading(isLoading)
        },[isLoading])

        console.log(loading)
    return(
        <>
        {
            loading &&
            <Container>
                <Logo/>
           <Spinner
           size={50}
           /> 
            </Container>
        }
        </>
    )
}