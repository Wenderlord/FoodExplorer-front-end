import styled from "styled-components";

export const Container = styled.div`

width: 100%;

height: 400px;

display: flex;

align-items: center;
justify-content: center;

> div{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;

    > img{
        width: 50%;

    }

    > h3{
        font-size: 3rem;
        text-align: center;
        color:var(--color-white);
    }
}

`