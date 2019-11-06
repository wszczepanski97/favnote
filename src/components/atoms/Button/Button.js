import styled, { css } from 'styled-components';

const Button = styled.button`
  height: 47px;
  /*if width is false return 220px*/
  width: 220px;
  background-color: ${({ color, theme }) => color || theme.primary};
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;

  ${({ secondary }) =>
    /* if secondary is true, return new styles */
    secondary &&
    css`
      height: 30px;
      width: 105px;
      background-color: hsl(0, 0%, 90%);
      font-size: 10px;
    `};
`;

export default Button;
