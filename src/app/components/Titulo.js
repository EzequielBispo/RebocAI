"use client";

import styled from "styled-components";

const Titulo = styled.h1`
  width: 185px;
  font-weight: 700;
  color: #000000;
`;

function FunTitulo(props) {
  return (
    <>
      <Titulo>{props.name}</Titulo>
    </>
  );
}

export default FunTitulo;
