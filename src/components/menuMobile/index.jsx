/* eslint-disable react/prop-types */
import { Container, MobileHeader} from "./styles";

import { FiX  } from "react-icons/fi";

import Button from "../button";
import ContainerContent from "../ContainerContent";
import Footer from "../Footer";



export default function MenuMobile({ hide, children,...rest }){
   

    return(
        <Container {...rest}>
            <MobileHeader>
                <ContainerContent>
                    <Button
                    title="Menu"
                    icon={FiX}
                    onClick = {hide}
                    btn="transparent"
                    />
                </ContainerContent>
            </MobileHeader>
            <ContainerContent>
           
           {children}
            </ContainerContent>
            <Footer/>
        </Container>
    )
}