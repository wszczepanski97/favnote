import React from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  display: grid;
  grid-template-rows: 1fr 4fr;
  min-height: 380px;
  overflow: hidden;
  position: relative;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${({ theme, yellow }) => (yellow ? theme.primary : '#ffffff')};

  ${flex =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const Card = () => (
  <StyledWrapper>
    <InnerWrapper yellow>
      <StyledHeading>Hello Wojciech</StyledHeading>
      <DateInfo>3 days</DateInfo>
    </InnerWrapper>
    <InnerWrapper>
      <Paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, expedita corrupti,
        nesciunt asperiores minus incidunt ipsa suscipit hic sunt maiores quis vel pariatur maxime
        id omnis odit?
      </Paragraph>
      <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;
