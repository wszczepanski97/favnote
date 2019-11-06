import styled, { css } from 'styled-components';

const Button = styled.button`
  height: 47px;
  /*if width is false return 220px*/
  width: ${({ width }) => width || '220px'};
  background-color: #ffd82b;
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
      background-color: #e6e6e6;
      font-size: 10px;
    `};
`;

export default Button;
