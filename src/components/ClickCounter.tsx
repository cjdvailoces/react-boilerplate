import React from "react";

export const ClickCounter = () => {
  const [count, setCounter] = React.useState(0);
  return (
    <div>
      <button onClick={() => setCounter((c) => c + 1)}>Count {count}</button>
    </div>
  );
};
