import { Container } from "./styles";

export default function Section({title, children, ...rest}){

    return(
        <Container className="container" {...rest}>
            <h3>{title}</h3>
            {children}
        </Container>
    )
}