import styled from 'styled-components';

const ButtonIcon = styled.button`
  background-color: transparent;
  background-image: url(${({ icon }) => icon});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 40%;
  border: none;
  border-radius: 20px;
  display: block;
  height: 67px;
  width: 67px;

  &.active {
    background-color: #ffffff;
  }
`;

export default ButtonIcon;
