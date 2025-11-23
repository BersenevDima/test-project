import styled from "styled-components";
import { Colors } from "@/shared";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px 8px 20px;
`;

export const Item = styled.div`
  padding-bottom: 6px;

  font-size: 15px;
  font-weight: 500;

  color: ${({ $active }) => ($active ? Colors.Orange : "#888")};
  border-bottom: 2px solid
    ${({ $active }) => ($active ? Colors.Orange : "transparent")};

  cursor: pointer;
`;
