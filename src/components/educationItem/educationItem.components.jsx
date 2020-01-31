import React from "react";

export default ({ level, school }) => (
  <div>
    <table cellSpacing="0" width='100%' border='0' cellPadding='0'>
        <tbody>
          <tr>
            <th colSpan={1} style={{textAlign:'center' ,width:'50%'}}>
              <h3>{level}</h3>
            </th>
            <td colSpan={1} style={{textAlign:'center'}}>
            <h3>{school}</h3>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
);
