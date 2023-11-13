"use client";

import styled from "styled-components";

const Titulo = styled.h1`
  display: flex;
  justify-content: space-around;
  font-weight: 700;
  color: #000000;
  font-family: "Inter", sans-serif;
`;

function FunTitulo(props) {
  return (
    <>
      <Titulo>{props.name}</Titulo>
    </>
  );
}

export default FunTitulo;
