"use client";

import styled from "styled-components";
import Logo from "next/image";
import Botao from "next/image";

const Navegacao = styled.nav`

`;

function Navbar() {
  return (
    <>
      <Navegacao>
        <Botao src="/menu-aberto1.png" width={30} height={30} style={{position: "relative", bottom: "6vh", left: "1vw"}}/>
        <Logo
          src="/logo.png"
          width={75}
          height={75}
          style={{ position: "relative", left: "50%", transform: "translateX(-50%)"}}
          alt="logo"
        />
      </Navegacao>
    </>
  );
}

export default Navbar;
