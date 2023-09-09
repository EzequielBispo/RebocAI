import Navegacao from "./components/Navbar";
import Titulo from "./components/Titulo";
import Subtitulo from "./components/Subtitulo";
import Texto from "./components/Texto";
import CampoCinza from "./components/CampoCinza";


export default function Home() {
  return (
    <main>
      <Navegacao />
      <Titulo name="Abrir ordem de serviço" />
      <Subtitulo name="Informações do Veículo" />
      <Texto name="Placa do caminhão:" />
      {/* <Texto name="Altura do veículo(metros):" />
      <Texto name="Tipo de Carga:" />
      <Texto name="Peso da carga(kg):" /> */}
      <CampoCinza />
      <CampoCinza />
      <CampoCinza />
    </main>
  );
}
