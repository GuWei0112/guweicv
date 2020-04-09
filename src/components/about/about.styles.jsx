import styled from "styled-components";

export const AboutContainer = styled.div`
  text-align: center;
`;
export const AboutList = styled.div`
  padding: 10px;
`;

export const About = styled.div`
  padding: 5px 160px;
  font-size:10px;
  white-space: pre-line;
`;

export const AboutProf = styled.div`
  padding: 5px 160px;
  white-space: pre-line;
    @media (min-width: 768px) {
      padding:0px 150px;
    }

    @media (min-width: 1024px) {
      padding:0px  200px;
    }

    @media (min-width: 1440px) {
      padding:0px  250px;
    }

    @media (min-width: 2560px) {
      padding:0px  500px;
    }
  

`;
