import React from "react";
import SkillList from "../../components/skillList/skillList.components";
import {Skill} from './skill.style'
import Skills from '../../data/skill_data'
export default () => {
  return (
    <Skill>
      <SkillList
        title={"FrontEnd"}
        skills={Skills.filter(skill => skill.end === "front")}
      />
      <SkillList
        title={"BackEnd"}
        skills={Skills.filter(skill => skill.end === "back")}
      />
    </Skill>
  );
};
