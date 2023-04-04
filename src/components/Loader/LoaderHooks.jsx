// loader/useLoader.js

import { useState, useEffect } from "react";

export const LoaderHooks = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return { loading, setLoading };
};
