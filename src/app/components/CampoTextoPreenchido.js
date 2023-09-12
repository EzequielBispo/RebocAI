"use client";

import styled from "styled-components";

const CampoTextoPreenchido = styled.input`
margin-bottom: 10px;
height: 15px;
color: #A1A5A9;
border: 2px solid #A1A5A9;
border-style: none none solid none;; 
`;

function FunCampoTextoPreenchido(props) {
  return (
    <>
      <CampoTextoPreenchido placeholder={props.name}></CampoTextoPreenchido>
    </>
  );
}

export default FunCampoTextoPreenchido;
