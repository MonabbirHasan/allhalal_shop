import React from "react";
import "./section_title.css"
const SectionTitle = ({text}) => {
  return (
    <div className="section_title">
      <h3 className="section_title_txt">{text}</h3>
    </div>
  );
};

export default SectionTitle;
