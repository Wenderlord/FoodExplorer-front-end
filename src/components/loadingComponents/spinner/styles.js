import styled from "styled-components";

export const Container = styled.div`

.loading{
    
    color: var(--color-gray-400);
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