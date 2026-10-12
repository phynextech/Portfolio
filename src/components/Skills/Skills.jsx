// src/components/Skills/Skills.jsx
import { skillCategories } from '../../data/portfolioData';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={`section-pad ${styles.skills}`} aria-label="Technical skills">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Technical Skills</div>
          <h2 className="section-title">My <span className="gradient-text">Toolkit</span></h2>
          <p className="section-subtitle">A curated set of languages, frameworks, and tools I use to craft impactful digital experiences.</p>
        </div>
        <div className={`${styles.container} stagger-children`}>
          {skillCategories.map((cat) => (
            <div key={cat.id} className={styles.category}>
              <div className={styles.catHeader}>
                <div className={styles.catIcon} style={{ background: cat.bg, color: cat.color }}>
                  <span className={`mdi ${cat.icon}`} />
                </div>
                <div className={styles.catName}>{cat.name}</div>
              </div>
              <div className={styles.chips}>
                {cat.skills.map((s) => (
                  <div key={s.label} className={styles.chip}>
                    <span className={`mdi ${s.icon}`} />
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
