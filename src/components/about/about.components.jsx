import React from "react";
import { AboutContainer,AboutList,About } from "./about.styles";
export default ({ about }) => {
  let { history, intro } = about.cvC;
  let introA = intro.split("/");
  return (
    <AboutContainer>
      <AboutList>
        <h3>工作經歷</h3>
      </AboutList>
      <table cellSpacing="0" width="100%" border="0" cellPadding="0">
        <tbody>
          <tr>
            <th>職稱</th>
            <th>時間</th>
            <th>公司名稱</th>
          </tr>
          {history.map(({ id, title, dt, comp }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>{dt}</td>
              <td>{comp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AboutList>
        <h3>自我介紹</h3>
      </AboutList>
      {introA.map((i, idx) => (
        <About key={idx}>
          <h3 style={{ textAlign: "left" }}>{i}</h3>
        </About>
      ))}
    </AboutContainer>
  );
};
