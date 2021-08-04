import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import Section from '../components/Section';
import Button from '../components/Button';
import Socials from '../components/Socials';

import myself from '../assets/myself.png';
import lines from '../assets/lines.svg';

const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center;
  overflow: hidden;
  margin: 60px 0;
  gap: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }

  .photo {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    object-fit: center;
    overflow: hidden;
    margin: 0 20px;
    background-color: var(--yellow);

    img {
      min-width: 340px;
      width: 100%;
      height: auto;
    }
  }

  .contentContainer {
    display: grid;
    justify-items: start;
    padding: 20px;
    background: white;

    @media (min-width: 768px) {
      margin: 0 20px;
    }

    .content {
      align-self: flex-start;
    }

    .button {
      align-self: flex-end;
    }
  }
`;

const Background = styled.div`
  background-image: url('${lines}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;

  @media (min-width: 1300px) {
    background-size: cover;
    background-position-y: 20%;
  }
`;

export default function About() {
  return (
    <Background>
      <Section id="kim-jestem">
        <Heading shadow>kim jestem?</Heading>
        <StyledAbout>
          <div className="photo">
            <img src={myself} alt="" className="imageMySelf" />
          </div>
          <div className="contentContainer">
            <Socials />
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra
            </p>
            <a href="https://drive.google.com/file/d/1hAyd9Nrb1sTmnst3yUvUmFKKGfDASHqK/view?usp=sharing">
              <Button primary>pobierz CV</Button>
            </a>
          </div>
        </StyledAbout>
      </Section>
    </Background>
  );
}
