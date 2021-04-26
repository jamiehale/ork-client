import styled from 'styled-components';
import { border, color, flexbox, space } from 'styled-system';

const Box = styled.div`
  box-sizing: border-box;
  min-width: 0;
  ${space}
  ${flexbox}
  ${color}
  ${border}
`;

export default Box;
