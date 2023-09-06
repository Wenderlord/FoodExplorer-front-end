import styled from "styled-components";

export const Select = styled.div`

border: none;


display: flex;
flex-direction: column;
gap: .8rem;
width: 200px;

> div{

    background: var(--bg-color-700);
    color: white;
    width: 100%;
    height: 5rem;
    border-radius: .5rem;
    position: relative;
    padding: 12px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;

    >input{
        background: none;
        border: none;
        width: 100%;
        height: 100%;
        color: var(--color-white);
        cursor: pointer;
        &:focus-visible{
            outline: none;
        }
    }
    > svg{

    transition: 140ms ease-in;

    &.open{
    rotate: 180deg;
}
}
}


`

export const DropDownMenu = styled.div`

&.hide{
    opacity: 0;
    visibility: hidden;
}
    overflow-y: hidden;
    background: var(--bg-color-700);
    color: white;
    width: 100%;
    padding: 3px;
    border-radius: .5rem;
    border:1px solid  #1c333f66;
    display: flex;
    flex-direction: column;
    transition:  80ms ease-in;

    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;

    margin-top: 6rem;

    > span{
        padding: 10px 12px  ;
        border-radius: 0.5rem;
        &:hover{
            background: #1c333f66;
        }
    }

`
