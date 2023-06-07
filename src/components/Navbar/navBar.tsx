import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Carlos Cauan</div>
      <div className={styles.menu}>
        <Link href="/works">
          <span className={styles.menuItem}>Works </span>
        </Link>
        <Link href="/about">
          <span className={styles.menuItem}>About me</span>
        </Link>
        <Link href="/contact">
          <span className={styles.menuItem}>Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;