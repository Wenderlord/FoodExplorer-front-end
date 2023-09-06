import styled from "styled-components";

export const Container = styled.div`

position: absolute;
display: flex;
flex-direction: column;
gap: 4rem;
align-items: center;
justify-content: center;
z-index: 99;

top: 0;
left: 0;
bottom: 0;
right: 0;

background: var(--bg-color-800);


.loading{
    font-size: 5rem;
    color: var(--color-secondary);
    display: flex;
    animation: circle 1s ease-out infinite;
}
@keyframes blink {
    
    0%{
        opacity: 1 ;
    }

    50%{
        opacity: 0.6;

    }

    100%{
        opacity: 1;
    }
}
@keyframes circle {
    
    0%{
        rotate: 0deg ;
    }

    90%{
        rotate: 330deg;

    }

    100%{

        rotate: 360deg;
    }
}
`