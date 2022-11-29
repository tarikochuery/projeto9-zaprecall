import React from 'react'
import { StyleFooter } from './style';

export const Footer = ({totalCards, qtdCardsConcluidos, iconesRespondidos}) => {

  return (
    <StyleFooter data-test='footer'>
      <p>{qtdCardsConcluidos}/{totalCards} CONCLUÍDOS</p>
      <div className='icones-container'>
          {iconesRespondidos.map(icone => <img src={icone.imagem} data-test={icone.dataTest} />)}
      </div>
    </StyleFooter>
  )
}
