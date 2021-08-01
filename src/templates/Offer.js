import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Heading from '../components/Heading';
import OfferCard from '../components/OfferCard';
import Section from '../components/Section';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: 480px;
  justify-items: center;
  width: 100%;
  gap: 40px;
  margin: 40px 0;
  z-index: 10;
`;

export default function Offer() {
  return (
    <Section id="oferta">
      <Heading shadow>Oferta</Heading>
      <Wrapper>
        <OfferCard
          title="Aplikacje internetowe"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
        />
        <OfferCard
          title="Strony internetowe"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
        />
        <OfferCard
          title="Projekty graficzne"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
        />
      </Wrapper>
      <Button>skontakuj się</Button>
    </Section>
  );
}
