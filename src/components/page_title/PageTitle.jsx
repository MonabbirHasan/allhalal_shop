import React from "react";

const PageTitle = (props) => {
  return (
    <div
      className="page_title_component"
      style={{ padding: props.container_pad }}
    >
      <h1 {...props}>
        {props.title}
      </h1>
      {props.subtitle === true ? (
        <small {...props.sub}>
          {props.title_sub}
        </small>
      ) : (
        ""
      )}
    </div>
  );
};

export default PageTitle;
