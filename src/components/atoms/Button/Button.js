import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.note};
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  height: 47px;
  padding: 0;
  text-transform: uppercase;
  width: 220px;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      font-size: 10px;
      height: 30px;
      width: 105px;
    `}
`;

export default Button;
