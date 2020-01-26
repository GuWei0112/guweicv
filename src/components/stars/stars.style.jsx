import styled, { keyframes } from "styled-components";

const fillIn = keyframes`
from {
  color: #fff;
}

to {
  color: white;
}
`;

export const Stars = styled.i`
  color: ${props => (props.fill === "true" ? "yellow" : "#fff")};
  //background-color: black;
  animation: ${fillIn} linear;
`;
