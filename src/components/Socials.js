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
      <button className="socialIcon">
        <HiOutlineMail />
      </button>
      <button className="socialIcon">
        <FiLinkedin />
      </button>
      <button className="socialIcon">
        <FiGithub />
      </button>
      <button className="socialIcon">
        <FiInstagram />
      </button>
    </StyledSocials>
  );
}
