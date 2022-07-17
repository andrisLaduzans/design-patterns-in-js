import React, { useState } from "react";
import { DecrementButton, IncrementButton } from "./components";
import { singletonCounter } from "./Counter";

console.log("app running");

export const App = () => {
  const [counter, setCounter] = useState<number>(singletonCounter.getCount());

  return (
    <div>
      <h1>Hello!!</h1>
      <h2>Counter: {counter}</h2>
      <div>
        <span style={{ marginRight: 16 }}>
          <IncrementButton
            onClick={() => setCounter(singletonCounter.getCount())}
          >
            Increment
          </IncrementButton>
        </span>

        <DecrementButton
          onClick={() => setCounter(singletonCounter.getCount())}
        >
          Decrement
        </DecrementButton>
      </div>
    </div>
  );
};
