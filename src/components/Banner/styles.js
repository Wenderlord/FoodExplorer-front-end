import styled from "styled-components";

export const Container = styled.div`

background: var(--bg-gradient-500);


margin-top: clamp(2rem,12vw, 20rem);
margin-bottom: 5rem;
position: relative;
border-radius: .8rem;
display: flex;
flex-wrap: wrap;
gap: 10px;

align-items: center;

img{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: clamp(25rem, 50vw, 70rem);
    margin-left: -3rem;
   
    @media (max-width:500px){
        margin: 0 auto;
    }
}


> div:last-child{
    text-align: end;
    width: 100%;
    flex: 1 1 auto;

    h3{
        font-size: clamp(2.3rem, 5vw, 5rem);
        line-height: 100%;
        margin-bottom: 1rem;
    }
    
    p{
        line-height: 120%;
        color:var(--color-gray-400);
    }
    margin: clamp(2rem, 7vw, 60rem) clamp(2rem, 7vw, 20rem);

    @media (max-width:500px){
       
            height: 240px;
        
        
        

        p{
            font-size: 1.6rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            
        }

       
    }

    
}
`