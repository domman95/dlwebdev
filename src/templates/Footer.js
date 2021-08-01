import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 40px 0;

  .footer {
    font-size: 16px;
    font-weight: var(--regular);
    margin: 0;
    padding: 0;
    text-align: center;

    a {
      text-decoration: none;
      color: black;
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
        <a href="https://dlwebdev.com">dlwebdev.com</a>
      </p>
      <p className="footer">
        @{new Date().getFullYear()} Wszelkie prawa zastrzeżone
      </p>
    </StyledFooter>
  );
}
