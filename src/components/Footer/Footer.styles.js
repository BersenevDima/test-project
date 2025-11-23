import { Colors } from '@/shared';
import styled from 'styled-components';

export const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;

  justify-content: space-around;
  display: flex;
  justify-content: space-around;

  background-color: ${Colors.Black};

  width: 100%;
`;

export const Placehoder = styled.div`
  height: ${({ height }) => `${height}px`};
`;
