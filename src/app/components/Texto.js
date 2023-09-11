"use client";

import styled from "styled-components";

const Texto = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

function FunTexto(props) {
  return <Texto>{props.name}</Texto>;
}

export default FunTexto;
