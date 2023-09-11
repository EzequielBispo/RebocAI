import CampoCinza from "./components/CampoCinza";
import CampoTextoPreenchido from "./components/CampoTextoPreenchido";
import Botao from "./components/Botao";
import Subtitulo from './components/Subtitulo'

export default function Home() {
  return (
    <main>
      <Navegacao />
      <Titulo name="Abrir ordem de serviço" />
      <Subtitulo name="Informações do Veículo" />
      <Texto name="Placa do caminhão:" />
      <CampoCinza />
      <Texto name="Altura do veículo(metros):" />
      <CampoCinza />
      <Texto name="Tipo de Carga:" />
      <CampoCinza />
      <Texto name="Peso da carga(kg):" />
      <CampoCinza />
      <Subtitulo name="Informações do Sinistro" />
      <Texto name="Tipo do sinistro:" />
      <CampoCinza />
      <Texto name="Endereço Sinistro" />
      <CampoTextoPreenchido name="Rua/Avenida/Etc:" />
      <CampoCinza />
      <CampoTextoPreenchido name="Número:" />
      <CampoCinza />
      <CampoTextoPreenchido name="Complemento:" />
      <CampoCinza />
      <Botao name="próximo" />
    </main>
  );
}
