import styled from 'styled-components';
import { Link as OriginalLink } from 'react-router-dom';
import { Colors } from '../../styles';

export const Link = styled(OriginalLink)`
  text-decoration: none;

  font-family: Inter;

  color: ${Colors.White};
`;
