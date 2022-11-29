import { Footer } from "../Footer/Footer";
import { ListaPerguntas } from "../ListaPerguntas/ListaPerguntas";
import { Logo } from "../Logo/Logo";
import { StyleApp } from "./style";
import { deckReact } from '../../utils/decks'
import { useState } from "react";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { BoasVindas } from "../BoasVindas/BoasVindas";

const totalCards = deckReact.length

export const App = () => {
  const [qtdCardsConcluidos, setQtdCardsConcluidos] = useState(0)
  const [estaIniciado, setEstaIniciado] = useState(false)

  const concluirCard = () => {
    setQtdCardsConcluidos(prev => prev + 1)
  }

  const iniciarApp = () => {
    setEstaIniciado(true)
  }

  return(
    <>
      <GlobalStyle />
      <StyleApp>
        {!estaIniciado 
        ?
          <BoasVindas iniciarApp={iniciarApp}/>
        :
          <>
          <Logo />
          <ListaPerguntas concluirCard={concluirCard} deck={deckReact}/>
          <Footer totalCards={totalCards} qtdCardsConcluidos={qtdCardsConcluidos} />
          </>
        } 
      </StyleApp>
    </>
  )
}