import styled from "styled-components";

export const Container = styled.div`

position: relative;
min-height: 450px;
text-align: center;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction:column;
background: var(--bg-color-800);
padding: 2rem;
border-radius: .8rem;
gap: 2rem;
border: 1px solid var(--bg-color-800);

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