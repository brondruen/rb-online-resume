import styles from './Background.module.css';

const experiences = [
  {
    company: 'Spice Factory Philippines Inc.',
    role: 'Mid Angular Engineer',
    period: 'June 2024 – August 2026',
    highlights: [
      'Engineered end-to-end features across 2–3 enterprise web applications using Angular, React.js and Next.js, optimizing data flow and system integrations.',
      'Designed and packaged a reusable, bundleable appointment booking module, enabling seamless integration across 3rd-party platforms.',
      'Developed clinical and operational admin tools, including a Subscription Management module that streamlined recurring order workflows.',
      'Spearheaded technical planning and scope refinement sessions with cross-functional teams to proactively resolve architectural edge cases.',
    ],
    tags: ['Angular', 'React.js', 'Vue.js', 'Next.js', 'TypeScript'],
    current: true,
  },
  {
    company: 'TopApps Inc.',
    role: 'Software Developer',
    period: 'April 2022 – May 2024',
    highlights: [
      'Engineered an automated user-access checker that enhanced system security by revoking expired permissions automatically.',
      'Integrated Google Maps API to build a real-time driver location tracking page, improving delivery tracking accuracy.',
      'Refactored legacy codebases and database queries, significantly resolving performance bottlenecks and UI inconsistencies.',
      'Collaborated via active pair programming and code reviews, reducing production bugs through proactive investigation and fixes.',
    ],
    tags: ['JavaScript', 'TypeScript', 'Angular', 'React Native', 'MySQL', 'Java Spring Boot', 'REST APIs'],
  },
  {
    company: 'Titus Global-Tech',
    role: 'Software Engineer',
    period: 'February 2019 – April 2022',
    highlights: [
      'Built responsive mobile web dashboards using Sass, improving overall mobile user accessibility and experience.',
      'Authored automated end-to-end test suites using Protractor, elevating code stability and release quality.',
      'Identified root causes for legacy software issues and delivered thoroughly tested bug fixes.',
    ],
    tags: ['Angular', 'TypeScript', 'Sass', 'Protractor', 'HTML5', 'CSS3'],
  },
  {
    company: 'Androbotics Clark Inc.',
    role: 'Software Engineer',
    period: 'January 2018 – February 2019',
    highlights: [
      'Maintained and optimized existing client blog platforms while designing responsive web pages.',
      'Developed custom WordPress themes from scratch or by using Elementor.',
      'Collaborated with Project Managers to translate business requirements into intuitive UI/UX web designs.',
    ],
    tags: ['WordPress', 'Elementor', 'UI/UX', 'Responsive Design', 'HTML5', 'CSS3', 'JavaScript'],
  },
];

export default function Background() {
  return (
    <section id="background" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>BACKGROUND</h2>
        <p className={styles.sectionSub}>Professional Experience</p>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardLeft}>
                <span className={styles.period}>{exp.period}</span>
                {/* {exp.current && <span className={styles.badge}>Current</span>} */}
              </div>
              <div className={styles.connector}>
                <div className={styles.dot} />
                {i < experiences.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.cardRight}>
                <h3 className={styles.company}>{exp.company}</h3>
                <p className={styles.role}>{exp.role}</p>
                <ul className={styles.highlights}>
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
                <div className={styles.tags}>
                  {exp.tags.map((tag, j) => (
                    <span key={j} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
