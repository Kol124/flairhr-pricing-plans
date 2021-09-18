import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  color: #ffffff;
  font-size: 16px;
  position: relative;
  border-radius: 97px;
  font-family: inherit;
  display: inline-block;
  text-transform: capitalize;
  background-color: #1388c9;
  text-decoration: none;
  transition: all 0.2s;
  margin: 20px 0 12px;
  padding: 15px 20px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #1388c9;
    transform: translateY(-3px);
    box-shadow: 0px 12px 15px rgba(32, 60, 134, 0.27);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 97px;
    transition: all 0.3s;
    background-color: #1388c9;
  }
`;
