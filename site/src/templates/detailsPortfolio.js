import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Main from '../components/Main';
import Heading from '../components/Heading';
import figma from '../assets/figma.jpg';
import reneecup from '../assets/projects/renecup.jpg';
import trojak from '../assets/projects/trojakwebsite.jpg';
import ServiceCard from '../components/ServiceCard';

const Wrapper = styled.div`
  padding: 30px 0 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0;
  border-top: 2px solid var(--yellow);
  border-bottom: 2px solid var(--yellow);

  .head {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 470px;
    gap: 30px;
  }

  .headContent {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    padding: 10px 0;
  }

  .headTitle {
    h4 {
      font-weight: var(--bold);
      font-size: 20px;
    }

    .hashtags {
      gap: 5px;
      margin: 0;
      padding: 0;
      color: #cecece;
    }

    .tag {
      display: inline-block;
    }
  }

  .headImage {
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow);

    img {
      object-fit: contain;
      object-position: center;
      width: 100%;
      height: auto;
    }
  }

  .headDescription {
    margin: 20px 0;
  }

  .headLinks {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 20px;

    button {
      min-width: 0;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
  }

  .bodyTitle {
    text-transform: uppercase;
    font-weight: var(--bold);
    font-size: 18px;
    border-bottom: 2px solid var(--yellow);
    padding-bottom: 5px;
  }

  .bodyContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, 260px);
    grid-auto-rows: 100px;
    padding: 20px 0 10px;
    gap: 20px;
  }

  .galleryContainer {
    width: 100%;
    column-count: 1;
    column-gap: 20px;
    padding: 20px 0 10px;

    @media (min-width: 530px) {
      column-count: 2;
    }

    @media (min-width: 840px) {
      column-count: 3;
    }

    .image {
      margin-bottom: 10px;
      -webkit-column-break-inside: avoid;
      page-break-inside: avoid;
      break-inside: avoid;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

export default function PortfolioPage({ location, pageContext }) {
  console.log(pageContext);
  const { title, description, hashtags, images, stack } = pageContext;
  return (
    <Layout location={location}>
      <Main>
        <Section>
          <Heading shadow>Portfolio</Heading>
          <Wrapper>
            <div className="head">
              <div className="headImage">
                <img src={images[0].asset.url} alt="" />
              </div>
              <div className="headContent">
                <div className="headTitle">
                  <h4>{title}</h4>
                  <div className="hashtags">
                    {hashtags.map((tag, i) => (
                      <span key={i} className="tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="headDescription">{description}</div>
                <div className="headLinks">
                  <Button primary>live</Button>
                  <Button secondary>github</Button>
                </div>
              </div>
            </div>
            <div className="body stack">
              <h4 className="bodyTitle">
                wykorzystane technologie i narzędzia
              </h4>
              <div className="container bodyContainer">
                {stack.map(({ id, image, title }) => (
                  <ServiceCard key={id} image={image.asset.url} title={title} />
                ))}
              </div>
            </div>
            <div className="body gallery">
              <h4 className="bodyTitle">przegląd wizualny</h4>
              <div className="container galleryContainer">
                {images.map(({ asset }) => (
                  <div className="image" key={asset.id}>
                    <img src={asset.url} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </Wrapper>
          <Link to="/#portfolio">
            <Button primary>powrót na stronę główną</Button>
          </Link>
        </Section>
      </Main>
    </Layout>
  );
}
