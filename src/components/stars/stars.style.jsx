import styled, { keyframes } from "styled-components";

const fillIn = keyframes`
from {
  color: #fff;
}

to {
  color: #0000ff;
}
`;

export const Stars = styled.i`
  color: ${props => (props.fill === "true" ? "yellow" : "#fff")};
  background-color: black;
  animation: ${fillIn} 2s linear;
`;
