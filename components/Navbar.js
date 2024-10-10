import { useState, useEffect } from 'react'; // Import useState and useEffect hooks
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  // State to toggle menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when resizing the window (optional)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Close the menu on larger screens
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

        <div className={`${styles.linkContainer} ${menuOpen ? styles.active : ''}`}>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/events" className={styles.link}>Events</Link>
          <Link href="/shop" className={styles.link}>Shop</Link>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
