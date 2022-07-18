import React, { CSSProperties, FC, ReactNode } from "react";

interface Props {
  onClick: () => void;
  children: ReactNode;
  style?: CSSProperties;
}

const Button = ({ onClick, children, style }: Props) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#eee",
        borderRadius: 10,
        padding: "10px 16px",
        color: "#333",
        fontWeight: "bold",
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
