import styled from 'styled-components';

export const Wrapper = styled.div`
  bottom: 0;
  left: 0;

  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

`;

export const Placeholder = styled.div`
  width: 100%;
  height: ${({ height }) => height || 0}px;
`;
