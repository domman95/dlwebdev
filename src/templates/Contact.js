import React from 'react';
import styled from 'styled-components';
import BgWave from '../components/BgWave';
import Button from '../components/Button';
import Section from '../components/Section';
import { FaRegPaperPlane } from '@react-icons/all-files/fa/FaRegPaperPlane';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 60px 0;

  .email {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 46px;
    font-size: clamp(10px, 5vw, 46px);

    a {
      font-weight: var(--extraBold);
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      margin-left: 10px;

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

export default function Contact() {
  return (
    <BgWave>
      <Section id="kontakt">
        <Wrapper>
          <div className="email">
            <FaRegPaperPlane />
            <a href="mailto:contact@dlwebdev.com">contact@dlwebdev.com</a>
          </div>
          <Button secondary>napisz do mnie</Button>
        </Wrapper>
      </Section>
    </BgWave>
  );
}
