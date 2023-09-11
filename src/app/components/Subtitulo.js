"use client";

import styled from "styled-components";

const Subtitulo = styled.h2`

`;

function FunSubtitulo(props) {
  return <Subtitulo>{props.name}</Subtitulo>;
}

export default FunSubtitulo;
