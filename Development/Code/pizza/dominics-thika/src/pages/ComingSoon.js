import React from 'react';
import styled from 'styled-components';
import { FaPizzaSlice } from 'react-icons/fa';

const Container = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  text-align: center;
`;

const Icon = styled.div`
  font-size: 4rem;
  color: #ff6b35;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const ComingSoon = () => (
  <Container>
    <Icon>
      <FaPizzaSlice />
    </Icon>
    <Title>Coming Soon!</Title>
    <Subtitle>
      This feature is under development.<br />
      Please check back later.
    </Subtitle>
  </Container>
);

export default ComingSoon; 