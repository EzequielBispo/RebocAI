"use client"

import styled from 'styled-components';

const Titulo = styled.h1`

position: absolute;
width: 264px;
height: 24px;
left: calc(50% - 264px/2 - 7px);
top: 156px;

text-transform: uppercase;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
`

function FunTitulo(props){
    return(
        <Titulo>{props.name}</Titulo>
    )
}

export default FunTitulo;