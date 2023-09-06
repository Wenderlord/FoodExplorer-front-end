import styled from "styled-components";

export const Container = styled.div`

position: fixed;

right: 0;
top: 0;
bottom: 0;
z-index: 3;
width: 100%;
height: 100%;
display: grid;
grid-template-rows: auto 1fr auto;
transition: 200ms ease-out;
opacity: 1;

background: var(--bg-color-900);



> div:nth-child(2) {
    padding: 30px 20px;
}

&.hide{
    width:100%;
    opacity: 0;
    right: 100%;
   }

> div{
    > div:nth-child(1){
       > div{
        margin-bottom: 3rem;
       }
    }
    > button:nth-last-child(-n+4){
    width: 100%;
    justify-content: start;
    border-radius: 0;
    border-bottom: 1px solid #192227;
   }
}
    
`

export const MobileHeader = styled.div`
   background:var(--bg-color-800);
   height: clamp(70px, 10vw, 100px);
   display: flex;
   align-items: center;

   
`
 
