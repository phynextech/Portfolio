// src/components/SkillBars/SkillBars.jsx
import { useEffect } from 'react';
import { skillBars } from '../../data/portfolioData';
import styles from './SkillBars.module.css';

export default function SkillBars() {
  useEffect(() => {
    const bars = document.querySelectorAll(`.${styles.progressFill}`);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.getAttribute('data-width');
        }
      });
    }, { threshold: 0.1 });
    
    bars.forEach(b => obs.observe(b));
    return () => obs.disconnect();
  }, []);

  return (
    <section className={`section-pad ${styles.section}`} aria-label="Skill Proficiency">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Proficiency</div>
          <h2 className="section-title">Skill <span className="gradient-text">Depth</span></h2>
        </div>
        <div className={styles.grid}>
          {skillBars.map((skill) => (
            <div key={skill.label} className={styles.item}>
              <div className={styles.header}>
                <div className={styles.label}>
                  <span className={`mdi ${skill.icon}`} style={{ color: skill.iconColor, marginRight: 8 }} />
                  {skill.label}
                </div>
                <div className={styles.pct}>{skill.pct}%</div>
              </div>
              <div className={styles.track}>
                <div 
                  className={styles.progressFill}
                  data-width={`${skill.pct}%`}
                  style={{ background: skill.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
