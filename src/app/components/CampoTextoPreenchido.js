"use client";

import styled from "styled-components";

const CampoTextoPreenchido = styled.input`

`;

function FunCampoTextoPreenchido(props) {
  return (
    <>
      <CampoTextoPreenchido placeholder={props.name}></CampoTextoPreenchido>
    </>
  );
}

export default FunCampoTextoPreenchido;
