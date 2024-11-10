import React from 'react';
import Image from "next/image";
import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';
import Header1 from './components/header';
import Header2 from './components/header2';
import Banner from './components/banner';


export default function Home() {
  return (
    <div className={styles.page}>
      <Header1 />
      <Header2 />
      <Banner />
    </div>
  );
}

