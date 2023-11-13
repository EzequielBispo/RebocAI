"use client";

import styled from "styled-components";

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  display: flex;
  background-color: gray;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  margin: 5px;
  padding: 6px 20px;
  width: 50px;
  opacity: 25%;
  height: 50px;
`;

export default function FunEnvioArquivos() {
  return (
    <>
      <div>
        <Input id="selecao-arquivo" type="file" />
        <Label for="selecao-arquivo" />
      </div>
    </>
  );
}
