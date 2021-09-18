import styled from "styled-components";

export const ToolTip = styled.aside`
  top: 35px;
  right: -7px;
  padding: 20px;
  width: 410px;
  border-radius: 5px;
  position: absolute;
  background: #203c86;
  opacity: 0;
  z-index: 100;
  visibility: hidden;
  transition-duration: 0.5s;
  transform: translate(0, 25px);
  box-shadow: 0px 43.2593px 60.563px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    right: -30px;
    width: 300px;
    padding: 15px;
  }

  &:after {
    content: "";
    position: absolute;
    height: 24px;
    width: 24px;
    top: -5px;
    left: 90%;
    z-index: 1;
    background: #203c86;
    transform: rotate(-45deg);

    @media (max-width: 768px) {
      left: 80%;
      width: 20px;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    color: #fff;
  }

  & > p {
    color: #fff;
    opacity: 0.7;

    &:last-of-type {
      text-transform: uppercase;
      color: #95bcf2;
      font-weight: 600;
    }
  }

  > * :not(:last-child) {
    margin-bottom: 10px;
  }

  ul > li {
    color: #fff;
    opacity: 0.9;
    display: grid;
    align-items: center;
    text-transform: none;
    grid-template-columns: 0.3fr 3fr;

    @media (max-width: 768px) {
      grid-template-columns: 0.5fr 3fr;
    }

    &:not(:last-of-type) {
      margin-bottom: 5px;
    }
  }

  span {
    height: 24px;
  }
`;
