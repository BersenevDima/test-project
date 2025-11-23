import styled from "styled-components";

export const Part = styled.div`
  height: 8px;
  width: ${({ width }) => width}%;

  background: ${({ color }) => color};
  border-radius: 3px;
`;
