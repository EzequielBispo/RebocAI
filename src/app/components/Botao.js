"use client";

import styled from "styled-components";

const Button = styled.button`

  position: absolute;
  width: 184px;
  height: 50px;
  left: 65px;
  top: 229px;

  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.24));
  border-radius: 5px;

  background: #d9d9d9;
  border-radius: 6px;

  color: #0092dd;
`;

const Texto = styled.p`

  position: absolute;
  width: 145px;
  height: 17px;
  left: 85px;
  top: 235px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;

function Botao(props) {
  return (
    <>
      <Button className={Texto}>{props.name}</Button>
    </>
  );
}

export default Botao;
