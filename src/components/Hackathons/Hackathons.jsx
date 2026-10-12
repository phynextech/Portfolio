// src/components/Hackathons/Hackathons.jsx
import { hackathons } from '../../data/portfolioData';
import styles from './Hackathons.module.css';

export default function Hackathons() {
  return (
    <section id="hackathons" className={`section-pad ${styles.section}`} aria-label="Hackathon experience">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Hackathons</div>
          <h2 className="section-title">Under <span className="gradient-text">Pressure</span> Builds</h2>
        </div>
        <div className={`${styles.grid} stagger-children`}>
          {hackathons.map((h) => (
            <div key={h.id} className={`glass-card ${styles.card}`}>
              <div className={styles.header}>
                <div className={styles.icon} style={{ background: h.iconBg, color: h.iconColor }}>
                  <span className={`mdi ${h.icon}`} />
                </div>
                <div>
                  <div className={styles.title}>{h.title}</div>
                  <div className={styles.org}>{h.org}</div>
                </div>
              </div>
              <ul className={styles.points}>
                {h.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
