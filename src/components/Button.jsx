import React from "react";
import "./button.css";

// import { CgFormatJustify } from "react-icons/cg";
const STYLES = ["btn--primary--solid"];

const SIZES = [
  "btn--little",
  "btn--medium",
  "btn--wide",
  "btn--large",
  "btn--square",
  "btn--square2",
  "btn--circle"
];

export const Button = ({
  children= 'String',
  type= 'String',
  onClick= () => {},
  buttonStyle= 'String',
  buttonSize= 'String',
}) => {
  const chekButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${chekButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
