import Link from 'next/link';
import styles from '../styles/page.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.contactInfo}>
        <p>Адрес: г.Кокчетав, ул. Ж. Ташенова 129Б </p>
        <p>(Рынок Восточный)</p>
        <a href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</a>
      </div>

      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.logo}>Логотип</a>
        </Link>
        <Link href="#">
          <a>О компании</a>
        </Link>
        <Link href="#">
          <a>Доставка</a>
        </Link>
        <Link href="#">
          <a>Возврат</a>
        </Link>
        <Link href="#">
          <a>Контакты</a>
        </Link>
      </nav>

      <div className={styles.actions}>
        <Link href="/catalog">
          <a className={`${styles.button} ${styles.catalogButton}`}>Каталог</a>
        </Link>
        
        <div className={styles.search}>
          <input type="text" placeholder="Поиск..." className={styles.searchInput} />
        </div>

        <a href="tel:+7(777)490-00-91" className={styles.callLink}>Заказать звонок</a>

        <Link href="/price-list.pdf" download>
          <a className={`${styles.button} ${styles.priceListButton}`}>Прайс-лист</a>
        </Link>

        <Link href="/cart">
          <a className={styles.cart}>
            Корзина (0 товаров, 0 рублей)
          </a>
        </Link>
      </div>
    </header>
  );
}