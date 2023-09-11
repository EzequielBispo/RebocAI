import CampoCinza from "./CampoCinza";
import CampoTextoPreenchido from "./CampoTextoPreenchido";
import Botao from "./Botao";
import Subtitulo from "./Subtitulo";
import Texto from "./Texto";
import Titulo from "./Titulo";
import Container from "./Container";

export default function Home() {
  return (
    <section>
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
    </section>
  );
}
