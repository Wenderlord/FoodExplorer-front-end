
import styled from "styled-components";


export const Container = styled.form`

    display:flex;
    flex-wrap: wrap;
    gap: 2rem;
    
    width: 100%;
    max-width: 400px;

    .cardNumber{
        flex: 2 0 100%;
    }
    .cardVal{
        flex: 1 0 40%;
    }

    .cardCVC{
        flex: 1 0 40%;
    }

    > input{
        background: transparent;
    }
    
    button{
        width: 100%;
    }
`