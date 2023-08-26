import { useState, useEffect } from "react";

const useLocalStorage = (
  initialState: [] | string | number | object,
  key: string
) => {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);
    return localValue ? JSON.parse(localValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
export default useLocalStorage;
