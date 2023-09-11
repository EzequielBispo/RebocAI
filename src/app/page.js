import Navegacao from './components/Navbar'
import Titulo from './components/Titulo'
import Subtitulo from './components/Subtitulo'

export default function Home() {
  return (
    <main>
      <Navegacao />
      <Titulo name='Abrir ordem de serviço' />
      <Subtitulo name='Informações do veículo' />
    </main>
  )
}
