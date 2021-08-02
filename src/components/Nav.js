import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNav = styled.nav`
  position: fixed;
  top: 50%;
  left: 30px;
  transform: translate(0, -50%);
  z-index: 110;
  background-color: white;
  padding: 20px 5px;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.3s linear;
  opacity: 0.4;

  &:hover {
    opacity: 1;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .link {
    position: relative;
    display: flex;
    align-items: center;
    text-decoration: none;

    span {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(10px, -50%) skewX(70deg);
      padding: 10px 20px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      color: black;
      transition: 0.3s ease-in-out;
    }

    .circle {
      position: relative;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid var(--yellow);
      cursor: pointer;
      opacity: 0.2;

      &:hover {
        opacity: 1;
      }

      &:hover + span {
        opacity: 1;
        transform: translate(10px, -50%) skewX(0);
      }

      &::before {
        display: none;
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: var(--yellow);
        width: 80%;
        height: 80%;
      }
    }

    &.active {
      .circle {
        opacity: 1;
      }
      .circle::before {
        display: block;
      }
    }
  }
`;

export default function Nav({ location }) {
  useEffect(() => {
    const links = document.querySelectorAll('.link');

    const activeClassName = () => {
      links.forEach((link) => {
        const linkHash = link.hash;
        const brHash = window.location.hash;

        if (linkHash === brHash) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    activeClassName();

    window.addEventListener('scroll', activeClassName);

    return () => {
      window.removeEventListener('scroll', activeClassName);
    };
  }, []);

  return (
    <StyledNav>
      <ul>
        <li>
          <Link className="link" to="#strona-glowna">
            <div className="circle" />
            <span>strona główna</span>
          </Link>
        </li>
        <li>
          <Link className="link" to="#oferta">
            <div className="circle" />
            <span>oferta</span>
          </Link>
        </li>
        <li>
          <Link className="link" to="#jak-pracuje">
            <div className="circle" />
            <span>jak pracuję?</span>
          </Link>
        </li>
        <li>
          <Link className="link" to="#kim-jestem">
            <div className="circle" />
            <span>kim jestem?</span>
          </Link>
        </li>
        <li>
          <Link className="link" to="#portfolio">
            <div className="circle" />
            <span>portfolio</span>
          </Link>
        </li>
        <li>
          <Link className="link" to="#kontakt">
            <div className="circle" />
            <span>kontakt</span>
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
}
