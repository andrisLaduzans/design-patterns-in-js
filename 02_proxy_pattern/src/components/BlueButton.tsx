import React, { FC, useState } from "react";
import { personProxy } from "../Person";
import Button from "./Button";

interface Props {
  onClick: () => void;
}

export const BlueButton = ({ onClick }: Props) => {
  return (
    <Button
      style={{
        border: `2px solid royalblue`,
      }}
      onClick={() => {
        if (personProxy.gender === "male") {
          personProxy.gender = "female";
        } else {
          personProxy.gender = "male";
        }
        onClick();
      }}
    >
      {`toggle gender: ${personProxy.gender}`}
    </Button>
  );
};
