import React from 'react';

import styles from './styles.module.scss';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Container;
