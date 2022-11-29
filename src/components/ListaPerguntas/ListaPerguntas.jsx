import React from 'react';
import { StyleListaPerguntas } from './style';
import { deckReact } from '../../utils/decks';
import { CardPergunta } from '../CardPergunta/CardPergunta';

export const ListaPerguntas = ({deck, concluirCard}) => {
  return (
    <StyleListaPerguntas>
      {deck.map((card, index) =>
        <CardPergunta
          concluirCard={concluirCard}
          numeroPergunta={index + 1}
          key={index}
          card={card}
        />
      )}
    </StyleListaPerguntas>
  );
};