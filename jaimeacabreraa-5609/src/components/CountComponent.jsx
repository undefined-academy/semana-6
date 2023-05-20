import React, { useState, useEffect } from 'react';

const CountComponent = () => {
  const [count, setCount] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount >= 65) {
          clearInterval(interval);
          return;
        }
        return prevCount + 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h1>{count}</h1>
  );
};

export default CountComponent;