import CampoCinza from "./CampoCinza";
import CampoTextoPreenchido from "./CampoTextoPreenchido";
import Botao from "./Botao";
import Subtitulo from "./Subtitulo";
import Texto from "./Texto";
import Titulo from "./Titulo";
import Container from "./Container";
import Caminho from "next/image";

export default function Home() {
  return (
    <section style={{margin: 10, display: "flex", flexDirection: "column", flexWrap: "wrap", alignContent: "space-around"}}>
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <Caminho src="/caminho.png" width={100} height={20} style={{marginTop: "10vh", display: "flex"}}/>
      </div>
      <Titulo name="Abrir ordem de serviço" />
      <Subtitulo name="Informações do Caminhão" />
      <div style={{display: "flex", flexDirection: "column"}}>
      <Container>
        <Texto name="Placa do caminhão:" />
        <CampoCinza />
      </Container>
      <Container>
        <Texto name="Altura do veículo:" />
        <CampoCinza />
      </Container>
      <Container>
        <Texto name="Tipo de Carga:" />
        <CampoCinza />
      </Container>
      <Container>
        <Texto name="Peso da carga(kg):" />
        <CampoCinza />
      </Container>
      </div>
      <Subtitulo name="Informações do Sinistro" />
      <Container>
        <Texto name="Tipo do sinistro:" />
        <CampoCinza />
      </Container>
      <Texto name="Endereço Sinistro" />
      <div style={{display: "flex", flexDirection: "column"}}>
      <CampoTextoPreenchido name="Rua/Avenida/Etc:" />
      <CampoTextoPreenchido name="Número:" />
      <CampoTextoPreenchido name="Complemento:" />
      </div>
      <div style={{display: "flex", justifyContent: "space-around", marginTop: 30}}>
      <Botao href="/Integrantes" name="próximo" />
      </div>
    </section>
  );
}
