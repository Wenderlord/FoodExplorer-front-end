import { Container, Content } from "./styles";
import ContainerContent from "../ContainerContent";
import Logo from "../Logo";
export default function Footer(){

    return(
        <Container>
            <ContainerContent>
                <Content>
                    <Logo/>
                    <span>© 2023 - Todos os direitos reservados.</span>
                </Content>
            </ContainerContent>
        </Container>
    )
}