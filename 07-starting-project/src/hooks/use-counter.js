import { useState, useEffect } from 'react';

const useCounter = (add) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + add);
    }, 1000);

    return () => clearInterval(interval);
  }, [add]);

  return counter;
};

export default useCounter;