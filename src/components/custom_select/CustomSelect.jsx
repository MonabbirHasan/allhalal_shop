import React, { useEffect, useState } from "react";
import "./CustomSelect.css"; // Import your CSS file for styling
import { Card } from "ui-neumorphism";

const CustomSelect = ({ options, onSelect, selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    selected || "Select an option"
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  return (
    <Card inset={true}>
      <div className="custom-select">
        <div className="select-header" onClick={handleToggle}>
          {selectedOption}
          <span className={`arrow ${isOpen ? "open" : ""}`}></span>
        </div>
        {isOpen && (
          <div className="select-options">
            {options.map((option) => (
              <div
                key={option}
                className="select-option"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default CustomSelect;
