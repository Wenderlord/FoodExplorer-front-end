import styled from "styled-components";

export const Container = styled.div`

display: flex;
padding: 24px 0;

background: var(--bg-color-800);
`

export const Content = styled.div`
display: flex;
flex-wrap: wrap;
height: 100%;
align-items: center;
justify-content: space-between;

> div{
    filter: grayscale(1) ;
    opacity: 0.6;
  
}

> span{
    font-size: clamp(1rem, 3vw, 1.4rem);
    color:var(--color-gray-400)
}

@media (max-width:320px){
    justify-content: center;
  gap: .8rem;
}
`