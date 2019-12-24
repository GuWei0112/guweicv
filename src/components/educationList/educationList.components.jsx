import React from "react";
import Education from "../../data/education_data";
import EducationItem from "../educationItem/educationItem.components";
export default () => {
  return (
    <div>
      {Education.map(e => (
        <EducationItem key={e.id} {...e} />
      ))}
    </div>
  );
};
