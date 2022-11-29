import logo from '../../assets/img/logo.png'
import { StyleBoasVindas } from './style';

export const BoasVindas = ({iniciarApp}) => {
  return(
    <StyleBoasVindas>
      <div className='logo-container'>
        <img src={logo} alt="ZapRecall Logo" />
      </div>
      <h1>ZapRecall</h1>
      <button data-test="start-btn" onClick={iniciarApp}>Iniciar Recall!</button>
    </StyleBoasVindas>
  )
}