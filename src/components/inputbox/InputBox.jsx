import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { TextArea, TextField } from "ui-neumorphism";

const InputBox = ({
  placeholder,
  dense,
  label,
  onChange,
  value,
  type,
  height,
  width,
}) => {
  // const [width, setWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [width]);
  return (
    <div>
      <Form.Label style={{ paddingLeft: 5 }}>{label}</Form.Label>
      {type == "textarea" ? (
        <TextArea
          onChange={onChange}
          value={value}
          width={width}
          dense={dense}
          placeholder={placeholder}
          height={height}
          style={{ margin: 0 }}
        />
      ) : (
        <TextField
          onChange={onChange}
          value={value}
          dense={dense}
          width={width}
          placeholder={placeholder}
          style={{ margin: 0 }}
        />
      )}
    </div>
  );
};

export default InputBox;
