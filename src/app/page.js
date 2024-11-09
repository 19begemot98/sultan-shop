import Image from "next/image";
import styles from "./page.module.css";
import ProductCategories from './components/productcard';

export default function Home() {
  return (
    <div className={styles.page}>
      <ProductCategories />
    </div>
  );
}
