"use client";

import styled from "styled-components";
import Link from "next/link";

const Button = styled.button`
  width: 140px;
  height: 33px;
  color: #0092dd;
  text-transform: uppercase;
  background: rgba(217, 217, 217, 0.63);
  border-radius: 5px;
`;

const Botao = (props) => {
  return (
    <Link href={props.href}>
      <Button>{props.name}</Button>
    </Link>
  );
}

export default Botao;
