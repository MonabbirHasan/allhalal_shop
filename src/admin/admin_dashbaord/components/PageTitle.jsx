import React from "react";

const PageTitle = ({
  padding,
  margin,
  color,
  background,
  textTransform,
  textAlign,
  title,
  fontFamily,
}) => {
  return (
    <div>
      <h3
        style={{
          padding: padding,
          margin: margin,
          background: background,
          textTransform: textTransform ? textTransform : "uppercase",
          textAlign: textAlign,
          color: color ? color : "#232",
          fontFamily: fontFamily ? fontFamily : "fantasy",
        }}
      >
        {title}
      </h3>
    </div>
  );
};

export default PageTitle;
