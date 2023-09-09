"use client"

import styled from 'styled-components';

const Texto = styled.p`
/* Placa do caminhão: */

position: absolute;
width: 202px;
height: 24px;
left: 13px;
top: 262px;

font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;

color: #000000;


`

function FunTexto(props){
    return(
        <Texto>{props.name}</Texto>
    )
}

export default FunTexto;