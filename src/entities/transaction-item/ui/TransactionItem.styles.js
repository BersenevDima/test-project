import styled from "styled-components";
import { Colors } from "@/shared";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 14px;
  background-color: ${Colors.DarkGray};
  border-radius: 12px;        
  margin-bottom: 4px;        
`;

export const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 14px;
`;

export const Name = styled.div`
  font-size: 15px;
  color: ${Colors.White};
  font-weight: 500;
`;

export const CategoryRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

export const Dot = styled.div`
  width: 6px;
  height: 6px;
  background: ${({ color }) => color};
  border-radius: 50%;
  margin-right: 6px;
`;

export const Category = styled.div`
  font-size: 13px;
  color: #8c8c8c;
`;

export const RightBlock = styled.div`
  text-align: right;
`;

export const Amount = styled.div`
  font-size: 15px;
  color: ${Colors.White};
  font-weight: 500;
`;

export const Date = styled.div`
  font-size: 12px;
  color: #777;
  margin-top: 4px;
`;
