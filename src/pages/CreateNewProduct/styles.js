import styled from "styled-components";


export const Form = styled.div`



 form {
    align-items: end;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 5rem;
    fieldset{
        border: none;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 3rem;
       
    }

    
    .product-img{
        flex:1 0 30%;
        
        ::-ms-value{
            text-overflow: ellipsis;
            font-size: 30px;
        }
    }
    .product-name{
        flex: 3 0 auto;

    }
    .product-category{
        flex: 2  0 auto;
    }

    .product-tags{

        flex:8 0 min(421px, 146px);
        
        > div  {

            height: 5rem;
            overflow-x: auto;
            display: flex;
            padding: 5px 12px;
            gap: 2rem;
            margin-top: .8rem;
            flex-direction: column;
            justify-content: center;
            align-content: flex-start;
            flex-wrap: wrap;

            scroll-snap-type: x mandatory;
            border-radius: .5rem;
            background: var(--bg-color-700);

            input{
                
                min-width: 30%;
            }
        }
    }

    .product-price{
        flex:1 0 auto;
    }
    input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
    .product-description{
        flex:1 0 auto;
        
         textArea {
            resize: none;
            height: 200px;
         }
    }

    > label{
        display: flex;
        gap:20px;

        > div {
            flex: 1 0 auto;
        }
    }

    > div:last-child{
        display: flex;
        justify-content: end;
        gap: 3rem;
        width: 100%;
        
      @media (max-width:600px){
       flex-direction: column;
      }
    }
    > button{
    width: max-content;
  

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