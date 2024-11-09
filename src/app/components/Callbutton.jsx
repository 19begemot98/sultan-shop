import React from 'react';
import styles from './callbutton.module.scss';

export default function CallButton() {
  return (
    <div href="tel:+77774900091" className={styles.callButton}>
      Заказать звонок
    </div>
  );
}

