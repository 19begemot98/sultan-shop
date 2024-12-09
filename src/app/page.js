import React from 'react';
import Layout from './layout';
import Banner from './components/banner/banner';
import Promotional from './components/productcard/productcard';
import Categories from './components/categories/categories';
import Slider from './components/slider/slider';
import SponsorSlider from './components/slider/spslider';
import Map from './components/map/map';

export default function Home() {
  return (
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
