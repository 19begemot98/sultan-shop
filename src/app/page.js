import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className={styles.page}>
      <Footer />
    </div>
  );
}
