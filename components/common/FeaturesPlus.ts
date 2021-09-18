import styled from "styled-components";

export const FeaturesPlus = styled.ul`
  &:last-of-type {
    font-weight: 700;
  }

  li {
    display: grid;
    align-items: center;
    text-transform: capitalize;
    grid-template-columns: 3fr 0.4fr;

    span {
      height: 24px;
      cursor: pointer;
      position: relative;

      &:hover {
        & > aside {
          opacity: 1;
          visibility: visible;
          transition-duration: 0.5s;
          transform: translate(0, 0);
        }
      }
    }
  }
`;
