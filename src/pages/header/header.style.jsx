import styled from "styled-components";
import { Link } from "react-router-dom";
export const Header = styled.div`
  background-color: #66bfbf;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const HeaderLinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  border-bottom: 10px yellow;
  :hover {
    color: #eaf6f6;
    border-bottom: 1px solid black;
  }
`;
