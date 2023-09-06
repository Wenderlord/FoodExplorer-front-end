import styled from "styled-components";

export const Container =styled.div`

.container + .container{
    margin-top: 5rem;
}
.container:last-child{
    margin-bottom: 5rem;
}

`

export const Content = styled.div`

grid-area: content;
overflow-y: auto;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`


