import Image from "next/image";
import React from 'react';
import styles from "./page.module.css";
import Categories2 from "./components/categories";


export default function Home() {
  return (
    <div className={styles.page}>
      <Categories2 />
    </div>
  );
}
