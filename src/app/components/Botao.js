"use client";

import styled from "styled-components";

const Button = styled.button`
  width: 140px;
  height: 33px;
  color: #0092dd;
  text-transform: uppercase;
  background: rgba(217, 217, 217, 0.63);
  border-radius: 5px;
`;

function Botao(props) {
  return (
    <>
      <Button>{props.name}</Button>
    </>
  );
}

export default Botao;
