import styled from "styled-components";

export const Container = styled.div`

display: flex;
gap: 1rem;
position: relative;
align-items: center;
padding: 8px 12px;

border-radius: .5rem;



background-color: ${({ isNew}) => isNew ? "transparent" : "var(--color-gray-500)"};
color: var(--color-white);

border:${({ isNew}) => isNew ? "1px dashed var(--color-gray-500)" : "none"};

scroll-snap-align:${({ isNew}) => isNew ? "end" : "start"};
scroll-margin: .8rem;


&.show{
    opacity: 0;
    animation: show 140ms ease-in; 
    transition:140ms;
    animation-fill-mode: both;
}

@keyframes show {
        0%{
            opacity: 0;
            scale:0.4 ;
        }

        80%{
            
            scale: 1.1;
        }

        100%{
            opacity: 1;
            scale: 1;
        }
    }

> button{
    border:none;
    background:none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button-delete{
    color: var(--color-gray-300);
}
.button-add{
    color: var(--color-gray-400);
}

    >input {
        opacity:${({ isNew}) => isNew ? "1" : "0"};
        position: ${({ isNew}) => isNew ? "" : "absolute"};;
        
        width: ${({isNew}) => isNew ? "100px" : "0"};
        color: var(--color-white);
        background: transparent;
      
       
        border:none;
        
        &:focus-visible{
           outline: none;
        }

        &::placeholder{
            color: var(--color-gray-500);
        }
    }

`;