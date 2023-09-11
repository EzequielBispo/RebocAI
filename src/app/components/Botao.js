"use client";

import styled from "styled-components";

const Button = styled.button`

`;

const Texto = styled.p`


`;

function Botao(props) {
  return (
    <>
      <Button className={Texto}>{props.name}</Button>
    </>
  );
}

export default Botao;
