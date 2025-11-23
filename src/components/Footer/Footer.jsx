import React from 'react';
import { useElement } from '@/shared';
import { Placehoder, Wrapper } from './Footer.styles';
import * as ui from './ui';

export const Footer = () => {
  const { elementRef, element } = useElement();

  return (
    <>
      <Wrapper ref={elementRef}>
        {ui.NAVIGATION.map(({ label, route, getStyles }) => (
          <ui.NavItem key={route} label={label} route={route} getStyles={getStyles} />
        ))}
      </Wrapper>
      <Placehoder height={element?.offsetHeight} />
    </>
  );
};
