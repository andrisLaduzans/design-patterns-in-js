import React, { useState } from "react";
import { BlueButton, RedButton } from "./components";
import { personProxy } from "./Person";

export const App = () => {
  const [_, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Hello!!</h1>
      <h2>Welcome to your First React App..!</h2>
      <pre>{JSON.stringify(personProxy, null, 2)}</pre>

      <div>
        <span style={{ marginRight: 16 }}>
          <BlueButton onClick={() => setCount((s) => s + 1)} />
        </span>

        <RedButton onClick={() => setCount((s) => s - 1)} />
      </div>
    </div>
  );
};
