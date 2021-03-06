import styled from "styled-components";
import { Link } from "react-router-dom";
export const Header = styled.div`
  padding: 30px 70px; 
  background-color: #fff;
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

export const HomeContainer = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderLink = styled(Link)`

`;
