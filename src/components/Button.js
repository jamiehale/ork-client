import styled from 'styled-components';

const Button = styled.button`
  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-right: ${({ theme }) => theme.space[3]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  padding-left: ${({ theme }) => theme.space[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  color: ${({ theme, color }) => color === 'primary' ? theme.colors.white : theme.colors.black};
  background-color: ${({ theme, color }) => color === 'primary' ? theme.colors.primary : theme.colors.blacks[2]};
  border: 0;
  border-radius: ${({ theme }) => theme.radii[2]}px;
`;

export default Button;
