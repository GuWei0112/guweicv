import React from "react";
import Project from "../../data/proj_data";
import ProjectItem from '../projectItem/projectItem.components'
export default () => {
  return (
    <div>
      {Project.map(e => (
        <ProjectItem key={e.id} {...e} />
      ))}
    </div>
  );
};
