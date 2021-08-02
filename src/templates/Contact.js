import React, { useState } from 'react';
import styled from 'styled-components';
import BgWave from '../components/BgWave';
import Button from '../components/Button';
import Section from '../components/Section';
import { FaRegPaperPlane } from '@react-icons/all-files/fa/FaRegPaperPlane';
import Confetti from 'react-dom-confetti';

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 400,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 60px 0;

  .email {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 46px;
    font-size: clamp(10px, 5vw, 46px);

    .copy {
      position: relative;
      font-weight: var(--extraBold);
      color: white;
      background-color: transparent;
      border: none;
      text-decoration: none;
      text-transform: uppercase;
      margin-left: 10px;
      cursor: pointer;

      &::before {
        content: 'kliknij, aby skopiować';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 5px 20px;
        color: black;
        font-size: 16px;
        font-weight: var(--regular);
        text-transform: lowercase;
        border-radius: 20px;
        opacity: 0;
      }

      &:hover {
        text-decoration: underline;
      }

      &:hover::before {
        opacity: 1;
      }
    }

    svg {
      fill: white;
    }
  }
`;

const ConfettiWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (str) => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <BgWave>
      <Section id="kontakt">
        <Wrapper>
          <div className="email">
            <FaRegPaperPlane />
            <button
              className="copy"
              onClick={() => {
                copyToClipboard('contact@dlwebdev.com');
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 3000);
              }}>
              contact@dlwebdev.com
            </button>
            <ConfettiWrapper>
              <Confetti active={isCopied} config={config} />
            </ConfettiWrapper>
          </div>
          <a href="mailto:contact@dlwebdev.com">
            <Button secondary>napisz do mnie</Button>
          </a>
        </Wrapper>
      </Section>
    </BgWave>
  );
}
