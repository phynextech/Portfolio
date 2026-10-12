// src/components/Internships/Internships.jsx
import { internships } from '../../data/portfolioData';
import styles from './Internships.module.css';

export default function Internships() {
  return (
    <section id="internships" className={`section-pad ${styles.section}`} aria-label="Internships">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Experience</div>
          <h2 className="section-title">Internship <span className="gradient-text">Experience</span></h2>
        </div>
        <div className={`${styles.grid} stagger-children`}>
          {internships.map((i) => (
            <div key={i.id} className={`glass-card ${styles.card}`}>
              <div className={styles.header}>
                <div className={styles.icon} style={{ background: i.iconBg, color: i.iconColor }}>
                  <span className={`mdi ${i.icon}`} />
                </div>
                <div className={styles.meta}>
                  <strong>{i.title}</strong>
                  <span>{i.org}</span>
                </div>
                <div className={styles.period}>{i.period}</div>
              </div>
              <ul className={styles.points}>
                {i.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
