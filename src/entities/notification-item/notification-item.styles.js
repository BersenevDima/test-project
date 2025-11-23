import styled from "styled-components";
import { Colors } from "@/shared";

export const Wrapper = styled.div`
  display: flex;

  padding: 16px;


`;

export const IconWrap = styled.div`
  width: 48px;
  height: 48px;

  border-radius: 12px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;

  img {
    width: 42px;
    height: 42px;
    object-fit: contain;
  }
`;


export const Right = styled.div`
  margin-left: 14px;
  flex: 1;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const Amount = styled.div`
  margin-top: 3px;
  font-size: 15px;
  font-weight: 600;
  color: ${Colors.Orange};
`;

export const Info = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 6px;
  color: #999;
  font-size: 13px;
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #777;
`;

export const SubInfo = styled.div`
  margin-top: 4px;
  font-size: 13px;
  color: #bbb;
  display: flex;
  flex-direction: column;
  gap: 6px;
  line-height: 1.5;
`;

export const Divider = styled.span`
  width: 4px;
  height: 4px;
  background: #666;
  border-radius: 50%;
`;

