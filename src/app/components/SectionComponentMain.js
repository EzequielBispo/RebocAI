"use client";

import "src/app/globals.css";
import Titulo from "./Titulo";
import Texto from "./Texto";
import Badge from "next/image";
import Imagem from "./Imagem";
import Botao from "./Botao";
import bg from "public/mainBackground.png";

export default function Home() {
  return (
    <>
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
          <div
            src="/caminho4.png"
            width={100}
            height={20}
            style={{ marginTop: "10vh", display: "flex" }}
          />
        </div>
        <Titulo name="ESTAMOS AQUI PARA AJUDÁ-LO COM O MELHOR SERVIÇO" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 30,
            backgroundColor: "gray",
          }}
        >
          <Botao href="/InformacoesDoUsuario" name="SOLICITAR GUINCHO" />
        </div>{" "}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 30,
          }}
        >
          <Badge src="/bagdeFerramenta.png" width="75" height="75" />
        </div>
        <Titulo name="Várias Opções" />
        <Texto
          name="Você também pode solicitar serviços adicionais
ou outro serviço para seu atendimento."
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 30,
          }}
        >
          <Badge src="/bagdeFerramenta.png" width="75" height="75" />
        </div>{" "}
        <Titulo name="Sempre Ligado" />
        <Texto name="Acompanhe sua solicitação em tempo real. Nós o notificaremos sobre tudo." />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 30,
          }}
        >
          <Badge src="/bagdeFerramenta.png" width="75" height="75" />
        </div>{" "}
        <Titulo name="Atendimento Virtual" />
        <Texto name="Forneça informações e faça perguntas, nossa assistente virtual estará com você." />
      </section>
    </>
  );
}
