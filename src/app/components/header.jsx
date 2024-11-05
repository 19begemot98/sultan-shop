
import React from 'react';
import Link from 'next/link';
import Button from "./button"
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.local}>
      <img src="/location.png"  className = {styles.icon_loc}></img>
      </div>
      <div className={styles.contactInfo}>
        <span>Адрес: г.Кокчетав, ул. Ж. Ташенова 129Б </span>
        <span>(Рынок Восточный)</span>
        <Link href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</Link>
        <span>На связи в любое время</span>
      </div>

      <nav className={styles.nav}>
        
        <Link href="#"> 
            О компании 
        </Link>
        <Link href="#">
            Доставка
        </Link>
        <Link href="#">
            Возврат
        </Link>
        <Link href="#">
            Контакты
        </Link>
      </nav>

      <div className={styles.line}></div>

      <div className={styles.part2}>
        <div className = {styles.logo}>
            <Link href={"/"}><img src={logo} alt = "logo" height={66}/></Link> 
        </div>

        <div>
          <Button href="/catalog">
          <p>Каталог</p>
          <img src = "/catalog.png" alt={"catalog log"}></img>
          </Button>
        </div>
        
        <div className={styles.search}>
          <input type="text" placeholder="Поиск..." className={styles.searchInput} />
        </div>


        <div className={styles.callLink}>
        <Link href="tel: +7(777)490-00-91">Заказать звонок</Link>
        </div>

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
