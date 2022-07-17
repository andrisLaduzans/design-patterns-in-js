import React, { ReactNode } from "react";
import { singletonCounter } from "../Counter";
import { Button } from "./Button";

interface Props {
  onClick: () => void;
  children: ReactNode;
}

export const IncrementButton = ({ onClick, children }: Props) => (
  <Button
    children={children}
    onClick={() => {
      singletonCounter.increment();
      onClick();
    }}
    style={{ border: "1px solid royalblue" }}
  />
);
