import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';

const StyledProject = styled.div`
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  box-shadow: var(--shadow);
  border-radius: 10px;
  padding: 10px 10px 0 10px;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
  float: left;

  .image {
    display: flex;
    overflow: hidden;
    border-radius: 10px;
  }

  .description {
    background-color: var(--white);
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

      span {
        display: inline-block;
      }
    }

    .title {
      font-weight: var(--bold);
      font-size: 18px;
      margin: 0 5px;
    }

    .content {
      /* display: inline-block; */
      font-size: 16px;
      padding: 0 5px;
      font-weight: var(--regular);
      word-break: break-word;
      overflow: hidden;

      p {
        /* display: inline-block; */
        display: -webkit-box;
        line-height: 1.2em;
        max-height: 6.8em;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        /* overflow: hidden; */

        &:nth-child(n + 3) {
          display: none;
        }
      }

      /* p:nth-child(n + 3) {
        display: none;
      } */

      strong {
        padding: 0;
      }
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
`;

export default function Project({ title, description, image, hashtags, slug }) {
  return (
    <StyledProject>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="description">
        <p className="hashtag">
          {hashtags.map((tag, i) => (
            <span key={i}>#{tag}</span>
          ))}
        </p>
        <h4 className="title">{title}</h4>
        <ReactMarkdown className="content">{description}</ReactMarkdown>
        <Link to={`/portfolio/${slug}`}>
          <button className="checkItOut">sprawdź szczegóły →</button>
        </Link>
      </div>
    </StyledProject>
  );
}
