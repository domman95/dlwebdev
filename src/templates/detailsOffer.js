import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Section from '../components/Section';
import Heading from '../components/Heading';
import Button from '../components/Button';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  padding: 30px 0 20px;
  width: 100%;

  .offerList {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0;
    border-bottom: 2px solid var(--yellow);

    li {
      font-size: clamp(14px, 1vw, 18px);
      list-style: none;
      flex: 1;
      padding-bottom: 10px;
      text-align: center;

      &:hover a {
        transform: translateY(-5px);
      }

      a {
        display: inline-block;
        color: rgba(0, 0, 0, 0.2);
        text-decoration: none;
        transition: transform 0.3s linear;
        height: 100%;

        &.active {
          color: black;
          font-weight: var(--bold);
          transform: translateY(-5px) scale(1.05);
        }
      }
    }
  }
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 340px;
  width: 100%;
  padding: 30px 0;
  gap: 30px;

  .illustration {
    display: flex;
    object-fit: cover;
    opacity: 0;
    transform: translateX(-4%);
    animation: show 0.3s ease-in-out forwards;

    img {
      width: 100%;
      height: auto;
    }
  }

  .description {
    padding: 0 10px;
    opacity: 0;
    transform: translateX(4%);
    animation: show 0.3s ease-in-out forwards 0.3s;
  }

  @keyframes show {
    from {
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export default function detailsOffer({ location, pageContext }) {
  const data = pageContext[0];
  const { description, illustration } = data;
  return (
    <Layout location={location}>
      <Main>
        <Section>
          <Heading shadow>Oferta</Heading>
          <Wrapper>
            <ul className="offerList">
              <li>
                <Link
                  to="/oferta/aplikacje-internetowe"
                  activeClassName="active">
                  Aplikacje internetowe
                </Link>
              </li>
              <li>
                <Link to="/oferta/strony-internetowe" activeClassName="active">
                  Strony internetowe
                </Link>
              </li>
              <li>
                <Link to="/oferta/projekty-graficzne" activeClassName="active">
                  Projekty graficzne
                </Link>
              </li>
            </ul>
            <Details>
              <div className="illustration">
                <img src={illustration.asset.url} alt="" />
              </div>
              <p className="description">{description}</p>
            </Details>
          </Wrapper>
          <Link to="/#oferta">
            <Button primary>powrót na stronę główną</Button>
          </Link>
        </Section>
      </Main>
    </Layout>
  );
}
