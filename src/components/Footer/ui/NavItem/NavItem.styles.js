import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 7px;
  padding-bottom: 16px;

  cursor: pointer;

  font-size: 12px;
  font-weight: 500;

  color: ${({ color }) => color};

   gap: 6px;
`;
