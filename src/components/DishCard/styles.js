import styled from "styled-components";

export const Container = styled.div`

position: relative;
min-height: 450px;
text-align: center;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction:column;
background: var(--bg-color-300);
padding: 2rem;
border-radius: .8rem;
gap: 2rem;
border: 1px solid var(--bg-color-800);

&:hover{
    border: 1px solid var(--bg-color-700)

}


img{

    width: 60%;
    filter: drop-shadow( 0 0 1rem var(--bg-color-900));
    transition: 240ms ease-in-out;
    cursor: pointer;
}


> h4{
    font-size: clamp(2rem, 1vw,2.5rem);
    font-weight: 700;
   
}
.description{
 
height: 40px;

}
 p{
    overflow: hidden;
    color: var(--color-gray-400);
    text-overflow: ellipsis;
   
}
> span{
    
    display: block;
    font-size: clamp(2rem, 3vw, 3.6rem);
    color: #82F3FF;
    font-family: 'Roboto', sans-serif;
}
`

export const AddToCard = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 100%;
gap:20px;

> div{
flex: 1 0 auto;

}
> div:last-child{
    
    display: flex;
    gap: 10px;
    align-items:center;
    > div:first-child{
        flex: 1 2 auto;     
    }
    > button:last-child{
        flex: 1 2 auto;
       width: 40%;
      
    }
}
`
export const Stepper = styled.div`

display: flex;
gap:10px;
align-items: center;
justify-content: space-evenly;
button{
    padding: 10px;
}

input{
    background: none;
    width: 40px;
    text-align: center;
    color: white;
    border: 0;
    
    &:focus-visible{
        outline: none;
    }
}
button{

    &:active{
        scale: 0.9;
   
    }

}
`

export const ProductFavIcon = styled.div`

display: flex;
flex-direction: column;
gap: 1rem;
padding: 5px;
color: white;
transition: 140ms;
z-index: 1;
font-size: 2.4rem;
position: absolute;
top:0;
right: 0;
margin: 2rem;

#btnFavorite, #btnEdit {
    cursor: pointer;
> svg{
    transition:140ms;
    &:active{
    scale: 0.9;
}

&.active{
    animation: pulse 104ms ease-in;
    fill: white;

   }

  
}

}


@keyframes pulse {
    0%{
        scale: 1;
    }
    50%{
        scale: 1.4;
    }
    100%{
        scale: 1;
    }
    
}
`

export const Loading = styled.div`

border-radius: 100%;
padding: 30%;
animation: animation 2s ease-out infinite forwards;
background: #ffffff08;
;

@keyframes animation {
    0%{
        opacity: 0;
        
    }

    60%{
        opacity: 1;
    }

    100%{
        opacity: 0;
    }
}
`