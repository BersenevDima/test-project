import React from 'react';
import * as style from './ButtonAddCard.styles';
import { Plus } from '@/shared';

export const ButtonAddCard = ({ onClick }) => (
  <style.AddCardButton onClick={onClick}>
    <Plus />
  </style.AddCardButton>
);
