import styles from './banner.css'; // Импортируем стили

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>БЫТОВАЯ ХИМИЯ, КОСМЕТИКА И ХОЗТОВАРЫ</h1>
      <p className={styles.subtitle}>ПОПТОМ ПО КОКЧЕТАВУ И ОБЛАСТИ</p>
    </div>
  );
};

export default Banner;