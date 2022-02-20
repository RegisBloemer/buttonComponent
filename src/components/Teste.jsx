import React from "react";
import "./teste.css";

// import { CgFormatJustify } from "react-icons/cg";
const STYLES = ["div--primary--solid"];

const SIZES = [
  "div--medium",
];

export const Div = ({
  children= 'String',
  type= 'String',
  onClick= () => {},
  divStyle= 'String',
  divSize= 'String',
}) => {
  const chekButtonStyle = STYLES.includes(divStyle)
    ? divStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(divSize) ? divSize : SIZES[0];

  return (
    <div
      className={`div ${chekButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </div>
  );
};
