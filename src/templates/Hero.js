import React from 'react';
import styled from 'styled-components';

import Logo from '../assets/logo';
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail';
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram';
import CircleCorner from '../assets/circleCorner';

const StyledHeader = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  height: 100vh;

  .circleCorner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    max-width: 35%;
    max-height: 35%;

    svg {
      height: 100%;
      width: auto;
    }
  }

  .wrapper {
    display: grid;
    justify-items: center;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 10px 0;
    gap: 40px;
  }

  #logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    width: 90%;

    svg {
      width: 100%;
    }
  }

  .socials {
    display: flex;
    justify-content: center;
    gap: 15px;

    .fakeIcon {
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
  }

  h1 {
    text-align: center;
    font-size: 26px;
  }

  .checkOffer {
    padding: 10px 35px;
    font-size: 20px;
    border-radius: 50px;
    border: 2px solid #ffca2e;
    background-color: #ffca2e;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: white;
    }
  }
`;

export default function Hero() {
  return (
    <StyledHeader>
      <div className="wrapper">
        <div className="socials">
          <button className="fakeIcon">
            <HiOutlineMail />
          </button>
          <button className="fakeIcon">
            <FiLinkedin />
          </button>
          <button className="fakeIcon">
            <FiGithub />
          </button>
          <button className="fakeIcon">
            <FiInstagram />
          </button>
        </div>
        <div id="logo">
          <Logo />
        </div>
        <h1>Strony i aplikacje internetowe</h1>
        <button type="button" className="checkOffer">
          sprawdź ofertę
        </button>
      </div>
      <div className="circleCorner">
        <CircleCorner />
      </div>
    </StyledHeader>
  );
}
