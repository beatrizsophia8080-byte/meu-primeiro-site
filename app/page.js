"use client";

import { useState } from "react";

const TEXTOS = {
  titulo: "Analise seu texto",
  descricao: "Digite um texto abaixo e clique em Analisar.",
  placeholder: "Digite seu texto aqui...",
  botao: "Analisar",
  respostaTitulo: "Resposta",
};

export default function Home() {
  const [texto, setTexto] = useState("");
  const [resposta, setResposta] = useState("");

  function analisarTexto() {
    setResposta(texto);
  }

  return (
    <main className="pagina">
      <section className="card">
        <h1>{TEXTOS.titulo}</h1>
        <p className="descricao">{TEXTOS.descricao}</p>

        <textarea
          className="campoTexto"
          placeholder={TEXTOS.placeholder}
          value={texto}
          onChange={(event) => setTexto(event.target.value)}
          rows={7}
        />

        <button className="botao" onClick={analisarTexto}>
          {TEXTOS.botao}
        </button>

        <div className="resposta">
          <h2>{TEXTOS.respostaTitulo}</h2>
          <p>{resposta}</p>
        </div>
      </section>
    </main>
  );
}
