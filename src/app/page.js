import React from 'react';
import Image from "next/image";
//import './i18n';
//import LanguageSwitcher from './LanguageSwithcer';
import styles from "./page.module.css";
import Layout from './layout';
import Banner from './components/banner/banner';
import Promotional from './components/productcard/productcard'
import Categories from "./components/categories/categories";
import Slider from './components/slider/slider';
import SponsorSlider from './components/slider/spslider';
import Map from './components/map/map';


export default function Home() {
  //const { t } = useTranslation('common');
  return (
    //<div className={styles.page}>
      //<header className={styles.header}>
        //<LanguageSwitcher />
      //</header>
    <Layout>
      <Banner />
      <Promotional />
      <Categories />
      <Slider /> 
      <SponsorSlider />
      <Map />
    </Layout>
  );
}