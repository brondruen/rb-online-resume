import styles from './Hero.module.css';

export default function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
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
        <p className={styles.title}>WEB DEVELOPER</p>
      </div>

      <button
        className={styles.scrollBtn}
        onClick={scrollToPortfolio}
        aria-label="Scroll down"
      >
        <span className={styles.scrollDot} />
      </button>
    </section>
  );
}
