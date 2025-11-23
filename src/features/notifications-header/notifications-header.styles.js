import styled from 'styled-components';
import { Colors } from '@/shared';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px; 
    transform: rotate(180deg);
    stroke: ${Colors.White};
  }
`;

export const Title = styled.div`
  flex: 1;
  text-align: center;

  font-family: Inter;
  font-weight: 500;
  font-size: 21px;
  line-height: 100%;
  color: ${Colors.White};
`;

export const RightIcon = styled.div`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    stroke: ${Colors.White};
  }
`;
