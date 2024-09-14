import clsx from 'clsx';
import React from 'react';
import styles from './innerWrapper.module.css';

export default function InnerWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx(styles.innerWrapper, className)}>
      {children}
    </div>
  );
}
