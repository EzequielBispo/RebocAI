"use client";

import styled from "styled-components";

const Subtitulo = styled.h2`
  display: flex;
  justify-content: space-around;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

function FunSubtitulo(props) {
  return <Subtitulo>{props.name}</Subtitulo>;
}

export default FunSubtitulo;
