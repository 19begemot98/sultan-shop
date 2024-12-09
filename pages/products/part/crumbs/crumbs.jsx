import styles from './crumbs.module.scss';
import Link from "next/link";
import { useRouter } from 'next/router';

export default function BreadCrumbs({ productCategories }) {
  const router = useRouter();
  const pathnames = router.pathname.split('/').filter(x => x);

  const getProductName = (id) => {
    if (!productCategories) return id; // Проверка наличия данных
    for (const category of productCategories) {
      for (const product of category.products) {
        if (product.id.toString() === id) {
          return product.name;
        }
      }
    }
    return id;
  };

  return (
    <div className={styles.BreadCrumbs}>
      <Link href="/">Главная</Link>
      {pathnames.map((value, index) => {
        const href = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = isNaN(value) ? decodeURIComponent(value) : getProductName(value);

        return (
          <span key={index} className={styles.BreadcrumbItem}>
            <span className={styles.Separator}></span>
            {!isLast ? (
              <Link href={href}>{displayName}</Link>
            ) : (
              <span>{displayName}</span>
            )}
          </span>
        );
      })}
    </div>
  );
}
