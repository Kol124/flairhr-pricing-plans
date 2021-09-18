import styled from "styled-components";

export const Card = styled.div`
  text-align: left;
  padding: 1.8rem 2.4rem;
  box-shadow: 0px 43.2593px 60.563px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  margin: 1rem auto;
  width: 389px;

  &:nth-of-type(2) {
    border: 5px solid #95bcf2;
  }

  > * :not(:last-child) {
    margin-bottom: 1.5rem;
  }

  ul > li {
    list-style-type: none;

    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }
`;
