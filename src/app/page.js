import CampoCinza from "./components/CampoCinza";
import CampoTextoPreenchido from "./components/CampoTextoPreenchido";
import Botao from "./components/Botao";
import Subtitulo from "./components/Subtitulo";
import Texto from "./components/Texto";
import Titulo from "./components/Titulo";
import Navegacao from "./components/Navbar";
import Container from "./components/Container";

export default function Home() {
  return (
    <main>
      <Navegacao />
      <Titulo name="Abrir ordem de serviço" />
      <Subtitulo name="Informações do Caminhão" />
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
      <Subtitulo name="Informações do Sinistro" />
      <Container>
        <Texto name="Tipo do sinistro:" />
        <CampoCinza />
      </Container>
      <Texto name="Endereço Sinistro" />
      <CampoTextoPreenchido name="Rua/Avenida/Etc:" />
      <CampoTextoPreenchido name="Número:" />
      <CampoTextoPreenchido name="Complemento:" />
      <Botao name="próximo" />
    </main>
  );
}
