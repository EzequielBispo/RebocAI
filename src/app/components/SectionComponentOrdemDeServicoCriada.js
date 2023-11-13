import CampoCinza from "./CampoCinza";
import CampoTextoPreenchido from "./CampoTextoPreenchido.js";
import Botao from "./Botao";
import Subtitulo from "./Subtitulo";
import Texto from "./Texto";
import Titulo from "./Titulo";
import Container from "./Container";
import Caminhao from "next/image";

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
          <Caminhao
            src="/caminho4.png"
            width={100}
            height={20}
            style={{ marginTop: "10vh", display: "flex" }}
          />
        </div>
        <Titulo name="Ordem de Serviço Criada" />
        <Texto name="Agradecemos pela preferência! Em breve seu guincho estará a caminho." />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 30,
          }}
        >
          <Caminhao src="/caminhao.png" width={150} height={150} />{" "}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 30,
          }}
        >
          <Botao href="/" name="pagina incial" />
        </div>
      </section>
    </>
  );
}
