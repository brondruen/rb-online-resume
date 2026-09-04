import styles from './Skills.module.css';

const skillGroups = [
  {
    category: 'Languages & Web',
    skills: ['TypeScript', 'JavaScript', 'Java', 'HTML5', 'CSS3 / Sass', 'Tailwind CSS'],
  },
  {
    category: 'Frameworks & Mobile',
    skills: ['Angular', 'React', 'Next.js', 'Vue.js', 'Spring Boot', 'React Native'],
  },
  {
    category: 'Databases & APIs',
    skills: ['PostgreSQL', 'MySQL', 'Google Maps API', 'REST APIs', 'Swagger', 'Postman'],
  },
  {
    category: 'Testing & Tooling',
    skills: ['Playwright', 'Protractor', 'Vite', 'Git', 'Jira', 'ClickUp'],
  },
  {
    category: 'AI Tools',
    skills: ['Claude Code', 'Cursor'],
  },
];

const featured = [
  { name: 'Angular', level: 90 },
  { name: 'TypeScript', level: 88 },
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'PostgreSQL', level: 75 },
  { name: 'Tailwind CSS', level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>SKILL</h2>
        <p className={styles.sectionSub}>Technical Expertise</p>

        <div className={styles.layout}>
          <div className={styles.barsCol}>
            {featured.map((s, i) => (
              <div key={i} className={styles.barItem}>
                <div className={styles.barLabel}>
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.groupsCol}>
            {skillGroups.map((group, i) => (
              <div key={i} className={styles.group}>
                <h4 className={styles.groupTitle}>{group.category}</h4>
                <div className={styles.pills}>
                  {group.skills.map((skill, j) => (
                    <span key={j} className={styles.pill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
