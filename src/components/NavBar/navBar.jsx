import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isTransparent = scrollTop === 0;
      setNavbarTransparent(isTransparent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${navbarTransparent ? styles.transparent : ''}`}>
      <a className={styles.logo}>Carlos Cauan</a>
      <div className={styles.navItems}>
        <a className={styles.navItem}>Item 1</a>
        <a className={styles.navItem}>Item 2</a>
        <a className={styles.navItem}>Item 3</a>
      </div>
    </nav>
  );
};

export default Navbar;