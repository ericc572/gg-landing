import Link from 'next/link';
import Image from 'next/image';  // Import the Image component
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navItemsContainer}>
        <Link href="/">
          <Image 
            src="/gg-logo-2.png"  // Path to your logo in the public folder
            alt="Gaia's Garden Logo" 
            width={180}
            height={60}
            className={styles.logo}  // Optional styling class
          />
        </Link>
        <div className={styles.linkContainer}>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/events" className={styles.link}>Events</Link>
          <Link href="/shop" className={styles.link}>Shop</Link>
        </div>
      </div>
    </nav>
  );
}
