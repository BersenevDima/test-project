import React from 'react';
import { CARDS_DATA, Card, ButtonAddCard } from '@/entities';
import * as style from './card-list.styled';

export const CardsList = () => {
  return (
    <style.Wrapper>
      {CARDS_DATA.map(card => (
        <Card
          key={card.id}
          balance={card.balance}
          type={card.type}
          last4={card.last4}
        />
      ))}

      <ButtonAddCard />
    </style.Wrapper>
  );
};
