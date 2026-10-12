// src/components/Achievements/Achievements.jsx
import { achievements } from '../../data/portfolioData';
import styles from './Achievements.module.css';

export default function Achievements() {
  return (
    <section id="achievements" className={`section-pad ${styles.section}`} aria-label="Patent and achievements">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Patent & Achievements</div>
          <h2 className="section-title">Milestones & <span className="gradient-text">Recognition</span></h2>
        </div>
        <div className={`${styles.grid} stagger-children`}>
          {achievements.map((a) => (
            <div key={a.id} className={`glass-card ${styles.card}`}>
              <div className={styles.iconWrap} style={{ background: a.gradient }}>
                {a.emoji}
              </div>
              <div className={styles.title}>{a.title}</div>
              <p className={styles.desc} dangerouslySetInnerHTML={{
                __html: a.desc.replace(/(2nd Place|Wi-Fi Direct|Phynex|CIT Chennai|Dhanalakshmi College|SRM)/g,
                  `<strong style="color:${a.highlight}">$1</strong>`)
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
