import React from 'react'
import { StyleFooter } from './style';

export const Footer = ({totalCards, qtdCardsConcluidos}) => {
  return (
    <StyleFooter>
      <p>{qtdCardsConcluidos}/{totalCards} CONCLUÍDOS</p>
    </StyleFooter>
  )
}
