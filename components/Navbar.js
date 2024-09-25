import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navItemsContainer}>
        <Link href="/" className={styles.logo}>Gaia's Garden</Link>
        <div className={styles.linkContainer}>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/events" className={styles.link}>Events</Link>
          <Link href="/shop" className={styles.link}>Shop</Link>
        </div>
      </div>
    </nav>
  );
}