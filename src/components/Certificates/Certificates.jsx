// src/components/Certificates/Certificates.jsx
import { certificates } from '../../data/portfolioData';
import styles from './Certificates.module.css';

export default function Certificates() {
  return (
    <section id="certificates" className={`section-pad ${styles.section}`} aria-label="Certifications">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Certifications</div>
          <h2 className="section-title">Verified <span className="gradient-text">Credentials</span></h2>
          <p className="section-subtitle">Industry-recognized certifications across AI, Cloud, Security, and professional development.</p>
        </div>
        <div className={`${styles.grid} stagger-children`}>
          {certificates.map((c) =>
            c.wide ? (
              <div key={c.id} className={`glass-card ${styles.card} ${styles.wide}`}>
                <div className={styles.wideInner}>
                  <div className={styles.logo} style={{ background: c.iconBg, color: c.iconColor }}>
                    <span className={`mdi ${c.icon}`} />
                  </div>
                  <div>
                    <div className={styles.provider}>{c.provider}</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{c.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 4 }}>{c.subtitle}</div>
                  </div>
                  <div className={styles.certBadge}>
                    <span className="mdi mdi-check-decagram" style={{ color: '#34d399' }} />
                    <span>Certified</span>
                  </div>
                </div>
              </div>
            ) : (
              <div key={c.id} className={`glass-card ${styles.card}`}>
                <div className={styles.logo} style={{ background: c.iconBg, color: c.iconColor }}>
                  <span className={`mdi ${c.icon}`} />
                </div>
                <div className={styles.provider}>{c.provider}</div>
                <ul className={styles.list}>
                  {c.items.map((item) => (
                    <li key={item}><span className="mdi mdi-check-circle" /> {item}</li>
                  ))}
                </ul>
                {c.extra && (
                  <>
                    <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border-glass)' }}>
                      <div className={styles.provider}>{c.extra.provider}</div>
                      <ul className={styles.list}>
                        {c.extra.items.map((item) => (
                          <li key={item}><span className="mdi mdi-check-circle" /> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
