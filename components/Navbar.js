import { useState, useEffect } from 'react'; // Import useState and useEffect hooks
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './Navbar.module.css';

export default function Navbar() {
  // State to toggle menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();

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
    <nav className={`${styles.nav} ${router.pathname === '/shop' ? styles.navShop : ''}`}>
      <div className={styles.navItemsContainer}>
        <Link href="/">
          {/* <Image 
            src="/gaia-garden-logo.png"  // Path to your logo in the public folder
            alt="Gaia's Garden Logo" 
            width={100}
            height={100}
            className={styles.logo}  // Optional styling class
          /> */}
        </Link>

        <div className={`${styles.linkContainer} ${menuOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="https://lu.ma/5wn05aap" className={styles.link}> Upcoming Events</Link>
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
