"use client";

import styled from "styled-components";
import Logo from "next/image";
import Botao from "next/image";

const Navegacao = styled.nav`
  width: 100%;
  height: 38px;
  background-color: #00B2E5;
`;

function Navbar() {
  return (
    <>
      <Navegacao>
      <div style={{display: "flex", justifyContent: "flex-start"}}>
        <Botao src="/menu-aberto1.png" width={30} height={30} style={{position: "relative"}}/>
   </div>
        <div style={{display: "flex", justifyContent: "space-around"}}>
        <Logo
          src="/logo.png"
          width={75}
          height={75}
          style={{position: "relative", top: -30}}
          alt="logo"
        />
        </div>
      </Navegacao>
    </>
  );
}

export default Navbar;