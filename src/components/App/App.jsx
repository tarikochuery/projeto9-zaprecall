import { Footer } from "../Footer/Footer";
import { ListaPerguntas } from "../ListaPerguntas/ListaPerguntas";
import { Logo } from "../Logo/Logo";
import { StyleApp } from "./style";
import { deckReact } from '../../utils/decks'
import { useState } from "react";
import { GlobalStyle } from "../../styles/GlobalStyle";

const totalCards = deckReact.length

export const App = () => {
  const [qtdCardsConcluidos, setQtdCardsConcluidos] = useState(0)

  const concluirCard = () => {
    setQtdCardsConcluidos(prev => prev + 1)
  }

  return(
    <>
      <GlobalStyle />
      <StyleApp>
        <Logo />
        <ListaPerguntas concluirCard={concluirCard} deck={deckReact}/>
        <Footer totalCards={totalCards} qtdCardsConcluidos={qtdCardsConcluidos} />
      </StyleApp>
    </>
  )
}