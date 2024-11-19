import React from 'react';
import Image from "next/image";
import './i18n';
import { useTranslation } from 'react-i18next';
import styles from "./page.module.css";
import Header1 from './components/header/header';
import Header2 from './components/header/header2';
import Banner from './components/banner/banner';
import Promotional from './components/productcard/productcard'
import Categories from "./components/categories/categories";
import Slider from './components/slider/slider';
import SponsorSlider from './components/slider/spslider';
import Map from './components/map/map';
import Footer from './components/footer/footer';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <div className={styles.page}>
      <Header1 />
      <Header2 />
      <Banner />
      <Promotional />
      <Categories />
      <Slider />
      <SponsorSlider />
      <Map />
      <Footer />
    </div>
  );
}

