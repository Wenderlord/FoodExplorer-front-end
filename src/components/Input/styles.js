import styled from "styled-components";

export const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
gap: .8rem;

height: ${(TextArea) => {TextArea ? "" : "5rem"}};

label{
  
    color:var(--color-gray-400);

    &.displayHidden{
     display:none;
    }
}

> div:nth-child(2){
    
    border-radius: .5rem;
    display: flex;
    gap: 10px;
    background: var(--bg-color-700);
    width: 100%;
    padding: 16px 12px;

    
        &:focus-within{
        outline: 1px solid var(--bg-color-600);
    }

  
> input{
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    color:var(--color-white);
    
    &:focus-visible{
        outline: 0;
    }

    ::-ms-reveal {
  filter: invert(100%);
}
    &::placeholder{
        color: var(--color-gray-500);
    }

}
    
textArea{
    background: transparent;
    border: none;
    width: 100%;
    
    
    color:var(--color-white);
    
    &:focus-visible{
        outline: 0;
    }
    &::placeholder{
        color: var(--color-gray-500);
    }
}
}
    

`

export const UploadButton = styled.label`

    

  &.displayHidden{
   display:none;
  
}

div{

    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: var(--bg-color-700);
    width: 100%;
    padding: 16px 12px;
    color:var(--color-white);
    
    &:hover{
        outline: 1px solid white;
    }

    
> input{
    display: none;
}
> svg{
    width: 2rem;
    height: 2rem;
}
    
}


`

export const List =styled.input`


`