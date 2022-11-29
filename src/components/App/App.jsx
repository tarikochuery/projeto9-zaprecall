import { Footer } from "../Footer/Footer";
import { ListaPerguntas } from "../ListaPerguntas/ListaPerguntas";
import { Logo } from "../Logo/Logo";
import { StyleApp } from "./style";

export const App = () => {
  return(
    <StyleApp>
      <Logo />
      <ListaPerguntas />
      <Footer />
    </StyleApp>
  )
}