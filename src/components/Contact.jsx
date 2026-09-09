import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens default email client with prefilled content
    const subject = encodeURIComponent(`Online Resume Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:bondocrellyn@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>CONTACT</h2>
        <p className={styles.sectionSub}>Get In Touch</p>

        <div className={styles.layout}>
          <div className={styles.info}>
            <p className={styles.summary}>
              Results-driven Frontend / Full-Stack Software Engineer with over 7 years
              of hands-on experience building scalable web applications, modular Angular
              solutions, and cloud-integrated systems.
            </p>
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Location</span>
                <span className={styles.detailValue}>Tarlac City, Philippines</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Phone</span>
                <a href="tel:+639427157323" className={styles.detailValue}>
                  +63 942 715 7323
                </a>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Email</span>
                <a href="mailto:bondocrellyn@gmail.com" className={styles.detailValue}>
                  bondocrellyn@gmail.com
                </a>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/rellyn-bondoc-976649150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.detailValue}
                >
                  rellyn-bondoc
                </a>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Education</span>
                <span className={styles.detailValue}>BS Computer Science — Tarlac State University</span>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className={styles.input}
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.input}
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={5}
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              {sent ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Rellyn Bondoc. All rights reserved.</p>
      </footer>
    </section>
  );
}
