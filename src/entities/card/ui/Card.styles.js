import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 150px;
  height: 98px;
  border-radius: 16px;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center;
  padding: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: white;
  font-family: 'Inter';
`;

export const Balance = styled.div`
  font-family: Inter;
font-weight: 600;
font-style: Semi Bold;
font-size: 18px;

`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Type = styled.div`
  font-family: Inter;
font-weight: 400;
font-style: Regular;
font-size: 14px;

`;

export const Last4 = styled.div`
  font-size: 12px;
  opacity: 0.9;
`;
