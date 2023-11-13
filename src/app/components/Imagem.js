"use client"

import Imagem from "next/image"

export default function FunImagem(children) {
    return(
        <Imagem>
            {children}
        </Imagem>
    )
}