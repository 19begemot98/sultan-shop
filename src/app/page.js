import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';
import Map from './components/map';

export default function Home() {
  return (
    <div className={styles.page}>
      <Map />
    </div>
  );
}
