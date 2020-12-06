import React from "react";
import styles from './tool.module.scss';

const T = ({children}) => {
  const id = children.toLowerCase();

  return (
    <div className={styles.tool} id={id}>
      <img alt={`${id}`} src={`images/tools/${id}.png`}/>
      <span>{children}</span>
    </div>
)};

export default T