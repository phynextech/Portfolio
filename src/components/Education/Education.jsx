// src/components/Education/Education.jsx
import { education } from '../../data/portfolioData';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className={`section-pad ${styles.education}`} aria-label="Education">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Education</div>
          <h2 className="section-title">Academic <span className="gradient-text">Journey</span></h2>
          <p className="section-subtitle">Building a strong foundation in Computer Science, Artificial Intelligence, and Machine Learning.</p>
        </div>
        <div className={styles.timeline}>
          {education.map((edu) => (
            <div key={edu.id} className={`${styles.item} reveal`}>
              <div className={styles.dot}>
                <span className={`mdi ${edu.icon}`} />
              </div>
              <div className={styles.body}>
                <span className={styles.period}>{edu.period}</span>
                <div className={styles.degree}>{edu.degree}</div>
                <div className={styles.institution}>{edu.institution}</div>
                <div className={styles.location}>
                  <span className="mdi mdi-map-marker-outline" /> {edu.location}
                </div>
                {edu.cgpa && (
                  <div className={styles.cgpa}>
                    <span className="mdi mdi-star" /> CGPA: {edu.cgpa} / 10
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
