import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-family: 'Inter';
  font-weight: 500;

  display: flex;
  align-items: center;

  svg:first-child {
    margin-right: 12px;
  }

  span {
    margin-right: 5px;
  }
`;

