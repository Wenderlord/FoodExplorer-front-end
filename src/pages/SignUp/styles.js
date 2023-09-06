import styled from "styled-components";


export const Container = styled.div`

width: 100%;
height: 100vh;
color: var(--bg-color-primary);

display: flex;
align-items: center;


`

export const Content = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    
    h1{
        font-weight: 500;
        text-align: center;
        margin-bottom: 4rem;
    }
     form{
        display: flex;
        flex-direction: column;
        gap: 3rem;
      
        a {
            display: flex;
            justify-content: center;
        }
    }
   > div:nth-child(2){
    padding: 6.4rem;
    background: var(--bg-color-800);
    width: 470px;
    border-radius: 1.6rem;
   }


   @media (max-width:869px){
    > div:nth-child(1){
        margin: 0 auto;
        svg{
            width: 3rem;
            height: 3rem;
        }
        span{
            font-size: 2.5rem;
        }
       
    }
    
    h1{
        display: none;
    }
    > div:nth-child(2){
        margin: 0 auto;
        padding:3.6rem;
        background:transparent;
    }
   }

@media (min-width:900px) {
    > div:nth-child(1){
       
        svg{
            width: 5rem;
            height: 5rem;
        }
        span{
            font-size: 3.5rem;
        }
       
    }
}
`