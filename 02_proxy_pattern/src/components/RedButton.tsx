import React, { FC, useState } from "react";
import { personProxy } from "../Person";
import Button from "./Button";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

interface Props {
  onClick: () => void;
}

export const RedButton = ({ onClick }: Props) => {
  return (
    <Button
      style={{
        border: `2px solid tomato`,
      }}
      onClick={() => {
        personProxy.age = getRandomInt(1, 100);
        onClick();
      }}
    >
      {`set random age: ${personProxy.age}`}
    </Button>
  );
};
