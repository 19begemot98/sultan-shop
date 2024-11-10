import React from 'react';

import Image from "next/image";
import styles from "./page.module.css";
import Header1 from './components/header';
import Header2 from './components/header2';
import Banner from './components/banner';
import Promotional from './components/productcard'
import Categories from "./components/categories";

import Slider from './components/slider';
import SponsorSlider from './components/spslider';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header1 />
      <Header2 />
      <Banner />
      <Promotional />
      <Categories />
      <Slider />
      <SponsorSlider />
    </div>
  );
}

