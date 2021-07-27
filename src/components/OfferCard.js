import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledCard = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr auto;
  justify-items: center;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 20px 10px;
  gap: 10px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h3 {
    font-weight: var(--bold);
    font-size: 26px;
    align-self: center;
    text-align: center;
    word-spacing: 30000px;
  }

  .description {
    padding: 0 20px;
    font-size: 16px;
    font-weight: var(--regular);
  }

  button {
    justify-self: start;
    margin: 0 20px;
    border: none;
    background: transparent;
    font-size: 16px;
    letter-spacing: 1px;
    color: var(--yellow);
    text-transform: uppercase;
  }
`;

export default function OfferCard({ title, description }) {
  return (
    <StyledCard>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      {/* <Button secondary>więcej</Button> */}
      <button className="checkItOut">sprawdź szczegóły →</button>
    </StyledCard>
  );
}
