import React from 'react';
import styled from 'styled-components';

import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail';
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram';

const StyledSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  z-index: 10;

  .socialIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
      stroke-width: 1;

      &:hover {
        transform: skew(-7deg) scale(1.1);
        filter: drop-shadow(3px 5px 2px rgb(255 202 46 / 0.4));
      }

      path {
        stroke-width: 1;
      }
    }
  }
`;

export default function Socials() {
  return (
    <StyledSocials>
      <a href="mailto:dominiklasek95@gmail.com">
        <button className="socialIcon">
          <HiOutlineMail />
        </button>
      </a>
      <a href="https://www.linkedin.com/in/dominik-lasek-5a5246207">
        <button className="socialIcon">
          <FiLinkedin />
        </button>
      </a>
      <a href="https://github.com/domman95">
        <button className="socialIcon">
          <FiGithub />
        </button>
      </a>
      <a href="https://www.instagram.com/dlwebdev/">
        <button className="socialIcon">
          <FiInstagram />
        </button>
      </a>
    </StyledSocials>
  );
}
