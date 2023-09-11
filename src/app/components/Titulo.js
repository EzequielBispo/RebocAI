"use client";

import styled from "styled-components";

const Titulo = styled.h1`
  width: 185px;
  height: 17px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
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
