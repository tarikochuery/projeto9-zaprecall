import React from 'react'
import { StyleFooter } from './style';

export const Footer = ({totalCards, qtdCardsConcluidos}) => {
  return (
    <StyleFooter data-test='footer'>
      <p>{qtdCardsConcluidos}/{totalCards} CONCLUÍDOS</p>
    </StyleFooter>
  )
}
