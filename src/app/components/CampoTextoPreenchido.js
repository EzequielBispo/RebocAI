"use client";

import styled from "styled-components";

const CampoTextoPreenchido = styled.input`
  width: 93px;
  height: 15px;
  color: #a1a5a9;
  border: 2px solid #a1a5a9;
  border-style: none none solid none;

  ${(props) =>
    props.first &&
    `
    width: 200px;

  `}
`;

function FunCampoTextoPreenchido(props) {
  return (
    <>
      <CampoTextoPreenchido placeholder={props.name}></CampoTextoPreenchido>
    </>
  );
}

export default FunCampoTextoPreenchido;
