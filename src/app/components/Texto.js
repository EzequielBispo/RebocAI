"use client"

import styled from 'styled-components';

const Texto = styled.p`

`

function FunTexto(props){
    return(
        <Texto>{props.name}</Texto>
    )
}

export default FunTexto;