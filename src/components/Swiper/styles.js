import styled from "styled-components";



export const Container = styled.div`
position: relative;


`

export const GradientSide = styled.div`

position: absolute;
width: 200px;
height: 100%;
z-index: 2;


&.left{
    background: linear-gradient(-90deg, rgba(0, 10, 15, 0) 0%, #000A0F 100%);
    bottom: 0;
    left: 0;
    pointer-events: none;
}
&.right{
    background: linear-gradient(90deg, rgba(0, 10, 15, 0) 0%, #000A0F 100%);
    bottom: 0;
    top: 0;
    right: 0;
    pointer-events: none;
}

@media (max-width:444px){
    width: 0;
}

`