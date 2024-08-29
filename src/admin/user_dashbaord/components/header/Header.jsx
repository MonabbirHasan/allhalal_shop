import React from "react";
import { Button } from "react-bootstrap";

const Header = (props) => {
  return (
    <div>
      <Button
        onClick={() => {
          props.HandleOpenDrawer();
        }}
      >
        open
      </Button>
    </div>
  );
};

export default Header;
