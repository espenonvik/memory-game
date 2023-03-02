import { useState } from "react";

const useAppBadge = () => {
  const navigator = window.navigator as any;

  const [counter, setCounter] = useState(1);

  const setBadge = () => {
    setCounter(counter + 1);
    if (typeof navigator.setAppBadge === "function") {
      navigator.setAppBadge(counter);
    } else if (typeof navigator.setClientBadge === "function") {
      navigator.setClientBadge(counter);
    }
  };

  const clearBadge = () => {
    setCounter(0);

    if (typeof navigator.clearAppBadge === "function") {
      navigator.clearAppBadge();
    } else if (typeof navigator.clearClientBadge === "function") {
      navigator.clearClientBadge();
    }
  };

  return [setBadge, clearBadge];
};

export default useAppBadge;
