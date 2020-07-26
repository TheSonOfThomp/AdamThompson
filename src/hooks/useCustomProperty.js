import { useEffect, useRef } from 'react';

// add the returned Ref to the root element of your component
// then you can use the 'propName' as a CSS variable
export const useCustomProp = (propName, value) => {
  const ref = useRef();
  useEffect(() => {
    if (ref) {
      ref.current.style.setProperty(propName, value)
    } else {
      console.warn(`Unused ref returned by useCustomProp`)
    }
  }, [propName, value, ref])

  return ref
}
