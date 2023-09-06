import styled from "styled-components";



export const Content = styled.div`


> div{
    > button{
    width: max-content;
    padding: 0 !important;
    font-weight: bold;
}
}

`
export const FoodContent = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
margin: 2rem 0;
width: 100%;    
gap:20px;


p {
    font-size: clamp(1.6rem, 2vw, 2rem);
    font-weight: 300;
    font-family: 'Poppins',sans-serif;

    margin-bottom: 2rem;
}
 img {
    width: clamp(20rem, 30vw, 50rem);
}
> div:nth-child(1){
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
}
> div:nth-child(2){
    flex: 3  0 40%;
    
}

@media (max-width:500px){
   
    text-align: center;

}


`

export const AddToCard = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
gap:20px;

@media (max-width:500px){
    justify-content: center;

}

`
export const Stepper = styled.div`

display: flex;
gap:10px;
align-items: center;

button{
    padding: 10px;
}
`

export const ContentTags = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    @media (max-width:500px){
   justify-content: center;
    
}

`