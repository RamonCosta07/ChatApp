import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 15px 20px;
    cursor: pointer;

    &:hover{
        background-color: #F0F2F5;
    }

    svg{
        width: 30px;
        height: 30px;
        background-color: #CCC;
        border-radius: 50%;
        margin-right: 10px;
        min-width: fit-content;
    }

    &.active{
        background-color: #bdbdd3;
    }
`

export const Name = styled.span`
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Avatar = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
`