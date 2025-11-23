import React from 'react';
import { useElement } from '@/shared';
import { Wrapper, Placeholder } from './Toolbar.styles';
import * as ui from './ui';

export const Toolbar = () => {
  return (
    <>
      <Wrapper>
        {ui.TOOLS.map(({ label, icon: Icon }) => (
          <ui.ToolItem key={label} label={label} Icon={Icon} />
        ))}
      </Wrapper>
    </>
  );
};
