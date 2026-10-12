// src/components/Phynex/Phynex.jsx
import { phynexApps } from '../../data/portfolioData';
import styles from './Phynex.module.css';

export default function Phynex() {
  return (
    <section id="phynex" className={`section-pad ${styles.section}`} aria-label="Phynex brand">
      <div className={styles.bgGlow} />
      <div className="container">
        <div className="section-header reveal" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Personal Brand</div>
          <h2 className="section-title">The <span className="gradient-text">Phynex</span> Universe</h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>A tech brand built from passion — spanning mobile apps, web platforms, AI tools, and IoT systems.</p>
        </div>

        <div className={`glass-card tilt-wrap ${styles.brandCard} reveal`}>
          <div className={styles.brandGlow1} />
          <div className={styles.brandGlow2} />
          <div className={styles.brandName}>Phynex</div>
          <p className={styles.brandDesc}>A personal tech brand focused on mobile apps, web development, and AI-based projects. Published multiple Android apps on Google Play Store and actively building cross-platform solutions.</p>
          <div className={styles.brandStats}>
            {[
              { count: 4, label: 'Android Apps', color: 'linear-gradient(135deg,#6366f1,#8b5cf6)' },
              { count: 3, label: 'Web Platforms', color: 'linear-gradient(135deg,#8b5cf6,#06b6d4)' },
              { count: 1, label: 'Patent Filed', color: 'linear-gradient(135deg,#06b6d4,#10b981)' },
            ].map((s) => (
              <div key={s.label} className={styles.brandStat}>
                <div className={styles.brandStatNum} style={{ background: s.color, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} data-count={s.count}>0+</div>
                <div className={styles.brandStatLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.appGrid} stagger-children`}>
          {phynexApps.map((app) => (
            <div key={app.name} className={`glass-card ${styles.appCard}`}>
              <div className={styles.appEmoji}>{app.emoji}</div>
              <div className={styles.appName}>{app.name}</div>
              <div className={styles.appSub}>{app.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
