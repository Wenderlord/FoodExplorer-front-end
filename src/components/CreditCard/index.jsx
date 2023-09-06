import Button from "../button";
import Input from "../Input";
import { Container } from "./styles";

export default function CreditCard(){
    return(
        <>
        <Container>
            <Input
            title="Número do Cartão"
            placeholder="000 000 000 000"
            className="cardNumber"
            bordered
            />
            <Input
            title="Validade"
            placeholder="00/00"
            className="cardVal"
            bordered
            />
            <Input
            title="CVC"
            placeholder="000"
            className="cardCVC"
            bordered
            />
            
            <Button
            title="Finalizar pagamento"
            btn="primary"

            />
        </Container>
        </>
    )
}
