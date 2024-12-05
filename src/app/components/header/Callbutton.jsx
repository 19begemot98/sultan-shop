import React from 'react';
// import { useTranslation } from 'react-i18next';
import styles from './callbutton.module.scss';

export default function CallButton() {
  // const { t } = useTranslation('common');

  return (
    <a href="tel:+77774900091" className={styles.callButton}>
      {/* {t('call_button')} */}
      Заказать звонок
    </a>
  );
}
