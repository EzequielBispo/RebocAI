"use client";

import Titulo from "../src/app/components/Titulo";
import Texto from "../src/app/components/Texto";
import Link from "next/link";

function FunIntegrantes() {
  return (
    <>
      <Titulo name="Integrantes" />
      <Texto
        name="
        Mariana Bastos - rm97510"
      />
      <Texto
        name="
        Ezequiel Bispo - rm99573
"
      />
      <Texto
        name="
        Vicenzo Guardabassi - rm550208 "
      />
      <Texto
        name="
        Gustavo Dos Santos - rm99618
        "
      />
      <Texto
        name="
        Diego Henrique - rm550269
        "
      />
      <Link href="https://github.com/EzequielBispo/RebocAI">Repositório Github</Link>
    </>
  );
}

export default FunIntegrantes;
