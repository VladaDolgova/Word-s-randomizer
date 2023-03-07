import React, { useState } from 'react';
import styles from '../styles/ToggleButton.module.css';

const ToggleButton = ({ onText, offText, onToggle, theme }) => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
    onToggle(!isOn);

    if (theme === 'dark') {
      document.body.classList.toggle('light');
      console.log("dark")
      
    } else {
      document.body.classList.toggle('dark');
      console.log("light")
    }
  };

  return (
    <div className={styles['toggle-button']} onClick={handleClick}>
      <div className={`${styles['switch']} ${isOn ? styles['on'] : ''} ${theme === 'dark' ? styles['dark'] : ''}`} />
      <div className={styles['text']}>{isOn ? onText : offText}</div>
    </div>
  );
};


export default ToggleButton;




