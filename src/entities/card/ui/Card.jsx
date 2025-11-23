import React from 'react';
import * as style from './Card.styles';
import DebitBg from '/assets/cards/debit.jpg';
import VirtualBg from '/assets/cards/virtual.png';

const backgrounds = {
  Debit: DebitBg,
  Virtual: VirtualBg,
};

export const Card = ({ balance, type, last4 }) => {
  const bg = backgrounds[type];

  return (
    <style.CardWrapper bg={bg}>
      <style.Balance>${balance.toFixed(2)}</style.Balance>

      <style.BottomRow>
        <style.Type>{type}</style.Type>
        <style.Last4>•• {last4}</style.Last4>
      </style.BottomRow>
    </style.CardWrapper>
  );
};
