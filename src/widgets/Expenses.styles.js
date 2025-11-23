import styled from "styled-components";
import {Colors} from '@/shared';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px 0;
  width: 100%;
  font-family: "Inter";
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 21px;
  font-weight: 500;
  color: white;

  span {
    color: ${Colors.Orange};
  }
`;

export const Amount = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${Colors.Gray};
`;

export const BarWrapper = styled.div`
  width: 100%;
  height: 14px;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  gap: 2px;
`;
