import React, { useState } from 'react'
import { StyleFooter } from './style';
import erro from '../../assets/img/icone_erro.png'
import emojiComemoracao from '../../assets/img/party.png'
import emojiTriste from '../../assets/img/sad.png'

export const Footer = ({totalCards, qtdCardsConcluidos, iconesRespondidos}) => {
  
  const MENSAGEM_SUCESSO = {
    titulo: `Parabéns!`,
    corpo: 'Você não esqueceu de nenhum flashcard!',
    emoji: emojiComemoracao
  }

  const MENSAGEM_ERRO = {
    titulo: `Putz...`,
    corpo: `Ainda faltam alguns...
    Mas não desanime!`,
    emoji: emojiTriste
  }

  const existeUmaFalha = iconesRespondidos.map(icone => icone.imagem).includes(erro)

  const mensagem = existeUmaFalha ? MENSAGEM_ERRO : MENSAGEM_SUCESSO

  return (
    <StyleFooter data-test='footer'>
      {totalCards === qtdCardsConcluidos && 
        <div data-test='finish-text'>
          <strong><img src={mensagem.emoji} />{mensagem.titulo}</strong>
          <br />
          <p>{mensagem.corpo}</p>
        </div>
      }
      <p>{qtdCardsConcluidos}/{totalCards} CONCLUÍDOS</p>
      <div className='icones-container'>
          {iconesRespondidos.map((icone, idx) => <img src={icone.imagem} data-test={icone.dataTest} key={idx} />)}
      </div>
    </StyleFooter>
  )
}
