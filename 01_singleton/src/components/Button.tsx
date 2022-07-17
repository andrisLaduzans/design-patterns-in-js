import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  style?: React.CSSProperties;
}

export const Button = ({ children, onClick, style }: Props) => (
  <button
    style={{
      backgroundColor: "#eee",
      padding: "10px 16px",
      
      borderRadius: 10,
      fontWeight: "bold",
      color: "#333",
      letterSpacing: 0.3,
      ...style,
    }}
    onClick={onClick}
  >
    {children}
  </button>
);
