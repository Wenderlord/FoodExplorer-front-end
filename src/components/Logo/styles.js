import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;

@media (max-width:600px){
    flex-direction: row;
    align-items: center;
    gap: .8rem;
}

cursor: pointer;
> div{

display: flex;
gap: .8rem;
align-items: center;

svg{
    width: clamp(1.8rem, 0.3rem + 1vw, 6rem);
    height: clamp(1.8rem, 0.3rem + 1vw, 6rem);
    animation: 900ms backwards 140ms  ease-in-out;
    animation-name: ${({ isAnimated}) => isAnimated ? 'rotate' : ''};
}

span{
line-height: 100%;
position: relative;
font-size: clamp(1.4rem, 1vw, 4.3rem);
font-weight: 600;
font-family: 'Poppins', sans-serif;

}


}

> span{
color:#82F3FF;
font-weight: 300;
font-size: 1.1rem;
text-align: right;
display: block;
}

@keyframes rotate {
    0%{
        rotate: 0;
        scale: 1;
    }

    30%{
        rotate: -20deg;
        scale: 1.04;
    }

    50%{
        rotate: 360deg;
    }

    80%{
        rotate: 20deg;
        scale: 1.04;
    }

    100%{
        rotate: 0deg;
         scale: 1;
    }
}



`
