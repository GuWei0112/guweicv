import React from "react";
import { SkillItem } from "./skillItem.style";
import Star from "../stars/stars.component";
export default ({ toolName, stars, value }) => {
  return (
    <SkillItem>
      <table cellSpacing="0" width="100%" border="0" cellPadding="0">
        <tbody>
          <tr>
            <th colSpan={2} style={{ textAlign: "center", width: "50%" }}>
              <h3>{toolName}</h3>
            </th>
            <td colSpan={2} style={{ textAlign: "center" }}>
              {stars ? <Star stars={stars} /> : <h3>{value}</h3>}
            </td>
          </tr>
        </tbody>
      </table>
    </SkillItem>
  );
};
