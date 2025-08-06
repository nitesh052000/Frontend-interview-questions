import React, { useEffect, useRef, useState } from "react";

const useThrottle = (value, delay) => {
  console.log("value", value, delay);
  const [throttledvalue, setThrottledValue] = useState(value);

  console.log("throttled value", throttledvalue);

  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      const now = Date.now();
      const timelapsed = now - lastExecuted.current;

      if (timelapsed >= delay) {
        setThrottledValue(value);
        lastExecuted.current = now;
      }
    }, delay - (Date.now() - lastExecuted.current));

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return throttledvalue;
};

export default useThrottle;
