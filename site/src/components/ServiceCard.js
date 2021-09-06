import React from 'react';
import styled from 'styled-components';

const StyledServiceCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--white);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--white);
  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  img {
    width: 50%;
    height: auto;
  }

  &:hover {
    transform: scale(1.01);
  }
`;

export default function ServiceCard({ image, title }) {
  return (
    <StyledServiceCard>
      <img src={image} alt={title} />
    </StyledServiceCard>
  );
}
