
import styled from "styled-components";

export const Container =styled.div`
width: 100%;
height: 100vh;

display: grid;


grid-template-columns: auto;
grid-template-rows: clamp(70px, 10vw, 100px)  auto;
grid-template-areas: 

"header"
"content"

;
`

export const Content = styled.div`



    .flexContainer{
        display: flex;
        gap: 3rem;
        margin-bottom: 5rem;
        flex-wrap:wrap;
        justify-content: space-between;

        > div{
            flex: 1 0 44%;

          
        }
    }

    .btnNext{
        display: none;
    }

@media (max-width:700px) {
    .btnNext{
                margin-top: 4rem;
            width: 200px;
            float: right;
            display: block;
        }
.hide{
display: none;
}

}

`


export const  ContentCart= styled.div`

position: relative;

&::after,&::before{
content:'';
height: 40px;
width: 100%;
background: beige;
position: absolute;

}

&::before{
top: 0;
background: linear-gradient(0deg, rgba(0, 10, 15, 0) 0%, #000A0F 100%);
}

&::after{
bottom: 0;
background: linear-gradient(180deg, rgba(0, 10, 15, 0) 0%, #000A0F 100%);
}

> div{
display: flex;
height: 100%;
max-height: 435px;
flex-direction: column;
overflow-y: auto;
gap: 3rem;
margin: 2rem 0;
scroll-snap-type: y mandatory;

}

`
export const ListCard = styled.div`
width: 100%;

border-radius: .8rem;
display: flex;
gap: 2rem;
align-items: center;
transition: 140ms ease-in;
cursor: pointer;

scroll-snap-align: start;
scroll-margin: .8rem;

img {
    width: 15%;
}
h4{
    font-size: clamp(1.7rem, 3vw, 2rem);

    >span{
        color:var(--color-gray-400)
    }
}
span{
color: var(--color-tomato-400);
font-size: clamp(1rem, 3vw, 1.5rem);
cursor: pointer;
transition: 140ms;
&:hover{
    opacity: 0.8;
}
}

&:first-child{
    padding-top: 3rem;
}
&:last-child{
    padding-bottom: 3rem;
}
animation: show 140ms ease-in ;

@keyframes show {
    0%{
        opacity: 0;
        scale: 0.5;
    }

    80%{
      
        scale: 1.2;
    }
    100%{
        opacity: 1;
        scale: 1;
    }
}
`


export const Payment = styled.div`

border-radius: .8rem;

max-width: 600px;
border:1px solid var(--color-gray-500);
overflow: hidden;
display: grid;

grid-template-columns: 50% 50%;
grid-template-rows: 100px 1fr;

grid-template-areas:

"buttonL buttonsR" 

"content content"


;

> button{
 border-bottom: 1px solid var(--color-gray-500);
 border-radius: 0;
}

> button + button{
 border-left: 1px solid var(--color-gray-500);

}

.active{
    background: #0D161B;
}
`
export const PaymentContent = styled.div`

grid-area: content;

height: min(361px, 358px);
padding: 2rem;
display: flex;
align-items: center;
justify-content: center;

> div:first-child.hide{
display: none;
 
}
> div:last-child.hide{
display: none;
 
}
`