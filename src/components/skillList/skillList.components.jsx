import React from "react";
import SkillItem from "../skillItem/skillItem.components";
import { SkillList } from "./skillList.style";
export default ({ title, skills }) => {
  return (
    <SkillList>
      <h3>{title}</h3>
      <div>
        {skills &&
          skills.map(({ toolName, stars, id }) => (
            <SkillItem toolName={toolName} stars={stars} key={id} />
          ))}
      </div>
    </SkillList>
  );
};
