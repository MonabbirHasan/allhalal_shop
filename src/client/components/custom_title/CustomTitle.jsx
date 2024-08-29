import React from "react";

const CustomTitle = (props) => {
  return (
    <div style={{ padding: "10px 0" }}>
      <h1
        style={{
          textTransform: "uppercase",
          color: "#444",
          fontSize: 24,
          fontWeight: "600",
          fontFamily:'monospace'
        }}
      >
        {props.title}
      </h1>
    </div>
  );
};

export default CustomTitle;
