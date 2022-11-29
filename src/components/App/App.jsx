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
  const [estaIniciado, setEstaIniciado] = useState(false)
  const [iconesRespondidos, setIconesRespondidos] = useState([])

  const qtdCardsConcluidos = iconesRespondidos.length

  const concluirCard = (icone) => {
    setIconesRespondidos([...iconesRespondidos, icone])
  }

  const iniciarApp = () => {
    setEstaIniciado(true)
  }

  return(
    <>
      <GlobalStyle />
      <StyleApp status={estaIniciado}>
        {!estaIniciado 
        ?
          <BoasVindas iniciarApp={iniciarApp}/>
        :
          <>
          <Logo />
          <ListaPerguntas concluirCard={concluirCard} deck={deckReact}/>
          <Footer iconesRespondidos={iconesRespondidos} totalCards={totalCards} qtdCardsConcluidos={qtdCardsConcluidos} />
          </>
        } 
      </StyleApp>
    </>
  )
}