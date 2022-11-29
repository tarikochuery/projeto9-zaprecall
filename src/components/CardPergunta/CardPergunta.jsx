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
  let dataTestIcon

  const handleClickCartaFechada = () => {
    if (estaAberta) return;
    setEstaAberta(true);
    setConteudoParagrafo(question);
    setSrcImg(reverseArrow)
  };

  const handleClickCartaAberta = () => {
    if (!estaAberta) return;
    setEstaRespondida(true);
    setConteudoParagrafo(answer);
  };

  const handleClickResposta = (cor, imagem, dataTest) => {
    setEstaFinalizada(true)
    setStatusCor(cor)
    setSrcImg(imagem)
    setConteudoParagrafo(`Pergunta ${numeroPergunta}`)
    concluirCard()
    dataTestIcon = dataTest
  }

  return (
    <StyleCardPergunta
      data-test='flashcard play-btn'
      onClick={handleClickCartaFechada}
      estaAberta={estaAberta}
      estaFinalizada={estaFinalizada}
      statusCor={statusCor}
    >
      <p data-test='flashcard-text'>{conteudoParagrafo}</p>
      {(!estaRespondida || estaFinalizada) && <img data-test={!estaFinalizada ? 'turn-btn' : dataTestIcon} onClick={handleClickCartaAberta} src={srcImg} />}
      {(estaRespondida && !estaFinalizada) &&
        <ContainerBotoes>
          <StyleButton onClick={() => handleClickResposta(VERMELHO, erro, 'no-icon')} color={VERMELHO}>
            Não Lembrei
          </StyleButton>
          <StyleButton onClick={() => handleClickResposta(AMARELO, acertoComDificuldade, 'partial-icon')} color={AMARELO}>
            Quase não lembrei
          </StyleButton>
          <StyleButton onClick={() => handleClickResposta(VERDE, zap, 'zap-icon')} color={VERDE}>
            Zap!
          </StyleButton>
        </ContainerBotoes>}
    </StyleCardPergunta>
  );
};
