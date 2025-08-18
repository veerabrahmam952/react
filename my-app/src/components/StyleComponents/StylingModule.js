import React from 'react';
import styles from './StylingComponent.module.css';

function StylingModuleComponent() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My App</h1>
      <p className={styles.description}>This is a simple component with styles.</p>
    </div>
  );
}

export default StylingModuleComponent;