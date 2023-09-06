import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export default function Tags({title}){
    return(

        <Container>
            <span>
                {title}
            </span>
        </Container>
    )
}