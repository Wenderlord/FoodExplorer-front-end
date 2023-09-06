
import styled from "styled-components";

export const SearchContent = styled.div`



position: absolute;
top:0;
z-index: -1;
width: 100%;


margin-top: 4.8rem;

border-end-start-radius: .5rem;
border-end-end-radius: .5rem;

background: var(--bg-color-700);
transition: all 140ms ease-out;
height: max-content;

> div {
    cursor: pointer;
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    border-radius: .5rem;
    margin-inline: .6rem;
    &:hover {
        background:#3a6a810a;
    }
    >div{

        p{
            font-size:1.2rem;
            color: var(--color-gray-400);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: clamp(14rem,29vw,30rem);
        }
        
    }
    span{
            color: var(--color-gray-400);
            font-size: clamp(1.2rem , 2vw, 1.4rem)
        }
    }

> div:first-child {
margin-top: .6rem;
}
> div:last-child {
margin-bottom: .6rem;
}
`

export const Container = styled.div`

position: relative;

z-index: 3;


`