
import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export default function ContainerContent({children}){
    return(

        <Container>
            {children}
        </Container>
    )
}