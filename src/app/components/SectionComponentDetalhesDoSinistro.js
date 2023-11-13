"use client";

import Titulo from "@/app/components/Titulo";
import Texto from "@/app/components/Texto";
import Caminho from "next/image";
import Botao from "@/app/components/Botao";
import EnvioArquivos from "@/app/components/EnvioArquivos";

export default function SectionComponent3() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Caminho
          src="/caminho3.png"
          width={100}
          height={20}
          style={{ marginTop: "10vh", display: "flex" }}
        />
      </div>
      <Titulo name="Detalhes do Sinistro" />
      <Texto name="Descreva melhor o ocorrido:" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 30,
        }}
      >
        <input style={{ width: "90vw", height: "25vh", borderColor: "gray"}}></input>
      </div>
      <Texto name="Anexe imagens para que possamos melhorar nosso serviço (máximo de 5)" />
      <div style={{ display: "flex" }}>
        <EnvioArquivos />
        <EnvioArquivos />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 30,
        }}
      >
        <Botao href="/OrdemDeServicoCriada" name="enviar" />
      </div>
    </>
  );
}
