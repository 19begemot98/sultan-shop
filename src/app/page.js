import Image from "next/image";
import styles from "./page.module.css";
import Slider from './components/slider';
import SponsorSlider from './components/spslider';

export default function Home() {
  return (
    <div className={styles.page}>
      <Slider />
      <SponsorSlider />
    </div>
  );
};

