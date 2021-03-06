import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledCard = styled.div`
  display: grid;
  grid-template-rows: 1fr auto auto;
  justify-items: center;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 20px 10px;
  max-width: 360px;
  gap: 10px;
  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  @media (min-width: 640px) and (max-width: 959px) {
    &:nth-last-child(1) {
      grid-column: 1 / -1;
    }
  }
  &:hover {
    transform: scale(1.01);
  }

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
    overflow: hidden;
    margin-bottom: 50px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  a {
    display: flex;
    justify-self: start;
    text-decoration: none;
  }

  .checkItOut {
    margin: 0 20px;
    border: none;
    background: transparent;
    font-size: 16px;
    letter-spacing: 1px;
    color: var(--yellow);
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      letter-spacing: 1.15px;
    }
  }
`;

export default function OfferCard({ title, description, slug }) {
  return (
    <StyledCard>
      <h3>{title}</h3>
      <div className="description">{description}</div>
      {/* <Button secondary>więcej</Button> */}
      <Link to={`/oferta/${slug.current}`}>
        <button className="checkItOut">sprawdź szczegóły →</button>
      </Link>
    </StyledCard>
  );
}
