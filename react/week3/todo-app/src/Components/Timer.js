import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      // called right before the next useEffect
      clearTimeout(timerId);
    };
  });

  return (
    <div className="watchcount">
      You have used {count} seconds on this website
    </div>
  );
}
export default Timer;
