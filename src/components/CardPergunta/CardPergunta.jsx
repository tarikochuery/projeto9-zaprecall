import React, { useState } from 'react'
import { StyleCardPergunta } from './style';
import arrow from '../../assets/img/seta_play.png'
import reverseArrow from '../../assets/img/seta_virar.png'

export const CardPergunta = ({numeroPergunta, card:{question, answer}}) => {
  const [estaAberta, setEstaAberta] = useState(false)

  const handleClickCartaFechada = () => {
    setEstaAberta(true)
  }

  return (
    <StyleCardPergunta 
      onClick={handleClickCartaFechada}
      estaAberta={estaAberta}>
      <p>{estaAberta ? question : `Pergunta ${numeroPergunta}`}</p>
      <img src={estaAberta ? reverseArrow : arrow} />
    </StyleCardPergunta>
  )
}
