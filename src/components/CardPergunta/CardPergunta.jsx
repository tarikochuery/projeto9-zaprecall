import React, { useState } from 'react';
import { ContainerBotoes, StyleButton, StyleCardPergunta } from './style';
import arrow from '../../assets/img/seta_play.png';
import reverseArrow from '../../assets/img/seta_virar.png';
import erro from '../../assets/img/icone_erro.png';
import zap from '../../assets/img/icone_certo.png';
import acertoComDificuldade from '../../assets/img/icone_quase.png';

const VERDE = "#2FBE34";
const AMARELO = "#FF922E";
const VERMELHO = "#FF3030";

export const CardPergunta = ({concluirCard, numeroPergunta, card: { question, answer } }) => {
  const [estaAberta, setEstaAberta] = useState(false);
  const [estaRespondida, setEstaRespondida] = useState(false);
  const [conteudoParagrafo, setConteudoParagrafo] = useState(`Pergunta ${numeroPergunta}`);
  const [estaFinalizada, setEstaFinalizada] = useState(false)
  const [statusCor, setStatusCor] = useState('')
  const [srcImg, setSrcImg] = useState(arrow)
  const [dataTestImg, setDataTestImg] = useState('play-btn')

  const abrirCarta = () => {
    setEstaAberta(true);
    setConteudoParagrafo(question);
    setSrcImg(reverseArrow)
    setDataTestImg('turn-btn')
  };

  const verificarResposta = () => {
    setEstaRespondida(true);
    setConteudoParagrafo(answer);
  };

  const handleClickImgCard = () => {
    if(!estaAberta) {
      abrirCarta()
    }
    if (estaAberta) {
      verificarResposta()
    }
  }

  const handleClickResposta = (cor, imagem, dataTest) => {
    setEstaFinalizada(true)
    setStatusCor(cor)
    setSrcImg(imagem)
    setConteudoParagrafo(`Pergunta ${numeroPergunta}`)
    concluirCard({imagem, dataTest})
    setDataTestImg(dataTest)
  }

  return (
    <StyleCardPergunta
      data-test='flashcard'
      estaAberta={estaAberta}
      estaFinalizada={estaFinalizada}
      statusCor={statusCor}
    >
      <p data-test='flashcard-text'>{conteudoParagrafo}</p>
      {(!estaRespondida || estaFinalizada) && <img data-test={dataTestImg} onClick={handleClickImgCard} src={srcImg} />}
      {(estaRespondida && !estaFinalizada) &&
        <ContainerBotoes>
          <StyleButton data-test='no-btn' onClick={() => handleClickResposta(VERMELHO, erro, 'no-icon')} color={VERMELHO}>
            N??o Lembrei
          </StyleButton>
          <StyleButton data-test='partial-btn' onClick={() => handleClickResposta(AMARELO, acertoComDificuldade, 'partial-icon')} color={AMARELO}>
            Quase n??o lembrei
          </StyleButton>
          <StyleButton data-test='zap-btn' onClick={() => handleClickResposta(VERDE, zap, 'zap-icon')} color={VERDE}>
            Zap!
          </StyleButton>
        </ContainerBotoes>}
    </StyleCardPergunta>
  );
};
