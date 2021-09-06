import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 0 40px;

  .footer {
    font-size: 16px;
    font-weight: var(--regular);
    margin: 0;
    padding: 0;
    text-align: center;

    .pageLink {
      display: inline-block;
      color: var(--white);
      padding: 0 5px;
      background-color: var(--yellow);
      transform: skew(-10deg);
    }

    span {
      display: inline-block;
      width: 20px;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p className="footer">
        stworzone z <span>💛</span> przez{' '}
        <a className="pageLink" href="https://dlwebdev.com">
          dlwebdev.com
        </a>
      </p>
      <p className="footer">
        @{new Date().getFullYear()} Wszelkie prawa zastrzeżone
      </p>
    </StyledFooter>
  );
}
