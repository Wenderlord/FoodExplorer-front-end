import { Container } from "./styles";
import imgPlaceHolder from "../../assets/PlaceHolderDish2.svg"
export default function ContainerDishesNull(){

    return(
        <Container>

            <div>
                <img src={imgPlaceHolder} alt="placeHolder image of empty Dishes" />

                <h3>Sem produto cadastrado nessa categoria</h3>
            </div>
        </Container>
    )
}