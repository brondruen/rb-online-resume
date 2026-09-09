import styles from './Hero.module.css';

export default function Hero() {
  const scrollToBackground = () => {
    document.getElementById('background')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />

      <div className={styles.circle}>
        <h1 className={styles.name}>
          RELLYN<br />BONDOC
        </h1>
        <div className={styles.divider} />
        <p className={styles.title}>SOFTWARE DEVELOPER</p>
      </div>

      <button
        className={styles.scrollBtn}
        onClick={scrollToBackground}
        aria-label="Scroll down"
      >
        <span className={styles.scrollDot} />
      </button>
    </section>
  );
}
