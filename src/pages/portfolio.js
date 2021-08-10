import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Section from '../components/Section';
import build from '../assets/build.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .image {
    position: relative;
    display: flex;
    max-width: 1000px;
    margin: 30px auto;

    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-align: center;
      font-weight: var(--extraBold);
      font-size: 42px;
      font-size: clamp(20px, 10vw, 42px);
      z-index: 10;
    }

    img {
      opacity: 0.4;
      width: 100%;
      height: auto;
    }
  }
`;

export default function PortfolioPage({ location }) {
  return (
    <Layout location={location}>
      <Section>
        <Wrapper>
          <div className="image">
            <h1>Strona w trakcie przygotowania!</h1>
            <img src={build} alt="" />
          </div>
          <Link to="/">
            <Button primary>powrót</Button>
          </Link>
        </Wrapper>
      </Section>
    </Layout>
  );
}
