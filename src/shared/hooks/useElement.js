import { useEffect, useRef, useState } from 'react';

export const useElement = () => {
  const elementRef = useRef(null);

  const [element, setElement] = useState(null);

  useEffect(() => {
    setElement(elementRef.current);
  }, []);

  return { elementRef, element };
};
