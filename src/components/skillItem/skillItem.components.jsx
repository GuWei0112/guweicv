import React from "react";
import { SkillItem } from "./skillItem.style";
import Star from "../stars/stars.component";
export default ({ toolName, stars }) => {
  return (
    <SkillItem>
      <table cellSpacing="0" width='100%' border='0' cellPadding='0'>
        <tbody>
          <tr>
            <th colSpan={2} style={{textAlign:'center' ,width:'50%'}}>
              <h2>{toolName}</h2>
            </th>
            <td colSpan={2} style={{textAlign:'center'}}>
              <Star stars={stars} />
            </td>
          </tr>
        </tbody>
      </table>
    </SkillItem>
  );
};
