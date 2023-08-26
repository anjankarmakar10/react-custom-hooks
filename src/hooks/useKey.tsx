import { useEffect } from "react";

const useKey = (key: string, action: () => void) => {
  useEffect(() => {
    const exit = (e: KeyboardEvent) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };

    document.addEventListener("keydown", exit);

    return () => document.removeEventListener("keydown", exit);
  }, [key, action]);
};
export default useKey;
