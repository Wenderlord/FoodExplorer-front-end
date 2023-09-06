import styled from "styled-components";


export const  ContentFav = styled.div`
display: grid;
flex-wrap: wrap;
gap: 4rem;
margin-top: 2rem;

grid-template-columns: repeat(auto-fit, minmax(auto, 300px));
`
export const FavCard = styled.div`

border-radius: .8rem;
display: flex;
gap: 2rem;
align-items: center;



img {
    cursor: pointer;
    width: 30%;
    transition: 140ms;
    &:hover{

scale:1.03;
}
}
h4{
    font-size: clamp(1.7rem, 3vw, 2rem);
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

&.show{animation: show 140ms ease-in ;}

&.remove{
    animation: show 140ms 300ms ease-in reverse forwards;

}

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

