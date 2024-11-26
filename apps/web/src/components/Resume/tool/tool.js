import React from "react";
import styles from './tool.module.scss';

const T = ({children}) => {
  let id = children.toLowerCase();
  if (id === 'c++') id = 'cpp'
  return (
    <div className={styles.tool} id={id}>
      <img alt={`${id}`} src={`images/tools/${id}.png`}/>
      <span>{children}</span>
    </div>
)};

export default T