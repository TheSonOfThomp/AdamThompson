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

// Same as above, but for setting multiple properties at once
// type customPropsObject = {[key:string]: string};
export const useCustomProps = (customProperties) => {
  const ref = useRef();
  useEffect(() => {
    if (ref) {
      if (typeof customProperties === 'object') {
        Object.entries(customProperties).forEach(prop => {
          ref.current.style.setProperty(prop[0], prop[1])
        })
      }
    } else {
      console.warn(`Unused ref returned by useCustomProp`)
    }
  }, [customProperties, ref])

  return ref
}
