import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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

      span {
        display: inline-block;
      }
    }

    .title {
      font-weight: var(--bold);
      font-size: 18px;
    }

    .content {
      display: inline-block;
      word-break: break-word;
      font-size: 16px;
      padding: 0 5px;
      font-weight: var(--regular);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 6; /* number of lines to show */
      -webkit-box-orient: vertical;
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
        <div className="content">{description}</div>
        <Link to={`/portfolio/${slug}`}>
          <button className="checkItOut">sprawdź szczegóły →</button>
        </Link>
      </div>
    </StyledProject>
  );
}
