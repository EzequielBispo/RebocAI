"use client";

import "src/app/globals.css";
import Titulo from "src/app/components/Titulo";
import Container from "src/app/components/Container";
import Texto from "src/app/components/Texto";
import CampoCinza from "src/app/components/CampoCinza";
import Botao from "src/app/components/Botao";
import Caminho from "next/image";

export default function SectionComponent() {
  return (
    <section
      style={{
        margin: 10,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignContent: "space-around",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Caminho
          src="/caminho1.png"
          width={100}
          height={20}
          style={{ marginTop: "10vh", display: "flex" }}
        />
      </div>
      <Titulo name="Informações do usuário" />
      <Container>
        <Texto name="Nome:" />
        <CampoCinza />
      </Container>
      <Container>
        <Texto name="CPF:" />
        <CampoCinza />
      </Container>
      <Container>
        <Texto name="Tipo de Carga:" />
        <CampoCinza />
      </Container>
      <Container>
        <Texto name="Peso da Carga (kg):" />
        <CampoCinza />
      </Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 30,
        }}
      >
        <Botao href="/OrdemDeServico" name="próximo" />
      </div>
    </section>
  );
}
