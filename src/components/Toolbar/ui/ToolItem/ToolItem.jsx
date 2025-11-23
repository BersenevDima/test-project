import React from 'react';
import { ItemWrapper } from './ToolItem.styles';

export const ToolItem = ({ label, Icon }) => {
  return (
    <ItemWrapper>
      <Icon />
      <span>{label}</span>
    </ItemWrapper>
  );
};
