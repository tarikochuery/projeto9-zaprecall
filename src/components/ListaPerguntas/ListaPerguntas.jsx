import React from 'react';
import { StyleListaPerguntas } from './style';
import { deckReact } from '../../utils/decks';
import { CardPergunta } from '../CardPergunta/CardPergunta';

export const ListaPerguntas = () => {
  return (
    <StyleListaPerguntas>
      {deckReact.map((card, index) =>
        <CardPergunta
          numeroPergunta={index + 1}
          key={index}
          card={card}
        />
      )}
    </StyleListaPerguntas>
  );
};