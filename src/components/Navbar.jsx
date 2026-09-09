import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo} onClick={() => scrollTo('hero')}>
        Rellyn
      </div>
      <ul className={styles.links}>
        <li><button onClick={() => scrollTo('background')}>BACKGROUND</button></li>
        <li><button onClick={() => scrollTo('skills')}>SKILL</button></li>
        <li><button onClick={() => scrollTo('contact')}>CONTACT</button></li>
      </ul>
    </nav>
  );
}
