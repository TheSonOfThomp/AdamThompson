import { useEffect, useRef } from 'react';

// add the returned Ref to the root element of your component
// then you can use the 'propName' as a CSS variable
export const useCustomProp = (propName, value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current.style.setProperty(propName, value)
  }, [propName, value, ref])

  return ref
}
