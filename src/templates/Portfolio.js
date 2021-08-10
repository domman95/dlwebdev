import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Section from '../components/Section';
import iva from '../assets/projects/iva.jpg';
import renecup from '../assets/projects/renecup.jpg';
import reneelogo from '../assets/projects/reneelogo.jpg';
import renewizytowki from '../assets/projects/renewizytowki.jpg';
import trojakwebsite from '../assets/projects/trojakwebsite.jpg';
import wyhaftowani from '../assets/projects/wyhaftowani.jpg';
import wyhaftowani2 from '../assets/projects/wyhaftowani2.jpg';
import wyhaftowani3 from '../assets/projects/wyhaftowani3.jpg';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  width: 100%;
  column-count: 1;
  column-gap: 20px;
  margin: 60px 0;

  @media (min-width: 630px) {
    column-count: 2;
  }

  @media (min-width: 1070px) {
    column-count: 3;
  }

  .project {
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
    box-shadow: var(--shadow);
    border-radius: 10px;
    overflow: hidden;
    padding: 10px 10px 0 10px;

    .image {
      display: flex;
      overflow: hidden;
      border-radius: 10px;
    }

    .description {
      background-color: white;
      padding: 10px 0;
      z-index: 10;

      & * {
        margin: 0;
        padding: 5px;
      }

      .hashtag {
        font-weight: (--regular);
        font-size: 16px;
        color: #cecece;
      }

      .title {
        font-weight: var(--bold);
        font-size: 18px;
      }

      .checkItOut {
        justify-self: start;
        border: none;
        background: transparent;
        font-size: 16px;
        letter-spacing: 1px;
        color: var(--yellow);
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s;
        margin-top: 10px;

        &:hover {
          letter-spacing: 1.15px;
        }
      }
    }

    img {
      width: 100%;
      height: auto;
      transition: transform 0.3s linear;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export default function Portfolio() {
  return (
    <Section id="portfolio">
      <Heading shadow>portfolio</Heading>
      <Wrapper>
        <div className="project">
          <div className="image">
            <img src={iva} alt="" />
          </div>
          <div className="description">
            <p className="hashtag">#wizytówki #salonIva #terminarz</p>
            <h4 className="title">Salon Fryzur IVA</h4>
            <p className="content">Lorem ipsum dolor sit amet consectetur. </p>
            <button className="checkItOut">sprawdź szczegóły →</button>
          </div>
        </div>
        <div className="project">
          <div className="image">
            <img src={renecup} alt="" />
          </div>
          <div className="description">
            <p className="hashtag">#wizytówki #salonIva #terminarz</p>
            <h4 className="title">Salon Fryzur IVA</h4>
            <p className="content">Lorem ipsum dolor sit amet consectetur. </p>
            <button className="checkItOut">sprawdź szczegóły →</button>
          </div>
        </div>
        <div className="project">
          <div className="image">
            <img src={wyhaftowani} alt="" />
          </div>
          <div className="description">
            <p className="hashtag">#wizytówki #salonIva #terminarz</p>
            <h4 className="title">Salon Fryzur IVA</h4>
            <p className="content">Lorem ipsum dolor sit amet consectetur. </p>
            <button className="checkItOut">sprawdź szczegóły →</button>
          </div>
        </div>
        <div className="project">
          <div className="image">
            <img src={trojakwebsite} alt="" />
          </div>
          <div className="description">
            <p className="hashtag">#wizytówki #salonIva #terminarz</p>
            <h4 className="title">Salon Fryzur IVA</h4>
            <p className="content">Lorem ipsum dolor sit amet consectetur. </p>
            <button className="checkItOut">sprawdź szczegóły →</button>
          </div>
        </div>
        <div className="project">
          <div className="image">
            <img src={reneelogo} alt="" />
          </div>
          <div className="description">
            <p className="hashtag">#wizytówki #salonIva #terminarz</p>
            <h4 className="title">Salon Fryzur IVA</h4>
            <p className="content">Lorem ipsum dolor sit amet consectetur. </p>
            <button className="checkItOut">sprawdź szczegóły →</button>
          </div>
        </div>
        <div className="project">
          <div className="image">
            <img src={wyhaftowani2} alt="" />
          </div>
          <div className="description">
            <p className="hashtag">#wizytówki #salonIva #terminarz</p>
            <h4 className="title">Salon Fryzur IVA</h4>
            <p className="content">Lorem ipsum dolor sit amet consectetur. </p>
            <button className="checkItOut">sprawdź szczegóły →</button>
          </div>
        </div>
        <div className="project">
          <div className="image">
            <img src={wyhaftowani3} alt="" />
          </div>
          <div className="description">
            <p className="hashtag">#wizytówki #salonIva #terminarz</p>
            <h4 className="title">Salon Fryzur IVA</h4>
            <p className="content">Lorem ipsum dolor sit amet consectetur. </p>
            <button className="checkItOut">sprawdź szczegóły →</button>
          </div>
        </div>
        <div className="project">
          <div className="image">
            <img src={renewizytowki} alt="" />
          </div>
          <div className="description">
            <p className="hashtag">#wizytówki #salonIva #terminarz</p>
            <h4 className="title">Salon Fryzur IVA</h4>
            <p className="content">Lorem ipsum dolor sit amet consectetur. </p>
            <button className="checkItOut">sprawdź szczegóły →</button>
          </div>
        </div>
      </Wrapper>
      <Link to="/portfolio">
        <Button primary>więcej projektów</Button>
      </Link>
    </Section>
  );
}
