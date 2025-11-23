import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ flexdirection }) => flexdirection};
  gap: ${({ gap }) => gap};
`;
