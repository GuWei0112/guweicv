import React from "react";
import { AboutContainer, AboutList, About } from "./about.styles";
import EducationPage from "../../pages/education/Education.components";
export default ({ about }) => {
  let { history, intro } = about.cvC;
  return (
    <AboutContainer>
      <AboutList style={{ padding: "0px 10px" }}>
        <h3>就讀學校</h3>
        <EducationPage />
      </AboutList>
      <hr />
      <AboutList>
        <h3>工作經歷</h3>
      </AboutList>
      <table cellSpacing="0" width="100%" border="0" cellPadding="0">
        <tbody>
          {history.map(({ id, title, dt, comp }) => (
            <tr key={id}>
              <td style={{ width: "50%" }}>
                {title} {dt}
              </td>
              <td>{comp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <AboutList>
        <h3>自我介紹</h3>
      </AboutList>
      <About>
        <h3 style={{ textAlign: "left" ,padding:'0px 300px'}}>{intro}</h3>
      </About>
    </AboutContainer>
  );
};
