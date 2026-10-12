// src/components/Projects/Projects.jsx
import { projects } from '../../data/portfolioData';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={`section-pad ${styles.projects}`} aria-label="Projects">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Projects</div>
          <h2 className="section-title">What I've <span className="gradient-text">Built</span></h2>
          <p className="section-subtitle">Real-world applications spanning AI, mobile, web, and IoT — all shipped and deployed.</p>
        </div>
        <div className={`${styles.grid} stagger-children`}>
          {projects.map((p) =>
            p.featured ? <FeaturedCard key={p.id} p={p} /> :
            p.fullWidth ? <FullWidthCard key={p.id} p={p} /> :
            <ProjectCard key={p.id} p={p} />
          )}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ p }) {
  return (
    <div className={`glass-card tilt-wrap ${styles.card} ${styles.featured}`}>
      <div className={styles.accent} style={{ background: p.accent }} />
      <div className={styles.glow} style={{ background: `radial-gradient(circle,${p.glow},transparent)` }} />
      <div>
        <div className={styles.icon} style={{ background: p.iconBg }}>{p.emoji}</div>
        <span className={styles.tag} style={{ background: p.tagBg, color: p.tagColor }}>{p.tag}</span>
        <h3 className={styles.name}>{p.name}</h3>
        <p className={styles.desc}>{p.desc}</p>
        <TechRow tech={p.tech} />
        <a href={p.link} className={styles.link}>View Project <span className="mdi mdi-arrow-right" /></a>
      </div>
      <div className={styles.featuredRight}>
        <div className={styles.featuresList}>
          <div className={styles.featuresLabel}>Key Features</div>
          {p.features.map((f) => (
            <div key={f} className={styles.featureItem}>
              <span className="mdi mdi-check-circle" style={{ color: '#a5b4fc' }} /> {f}
            </div>
          ))}
        </div>
        <div className={styles.brandBox}>
          <div className={styles.brandText}>Phynex</div>
          <div className={styles.brandSub}>Founder & Lead Developer</div>
        </div>
      </div>
    </div>
  );
}

function FullWidthCard({ p }) {
  return (
    <div className={`glass-card tilt-wrap ${styles.card} ${styles.fullWidth}`}>
      <div className={styles.accent} style={{ background: p.accent }} />
      <div className={styles.glow} style={{ background: `radial-gradient(circle,${p.glow},transparent)` }} />
      <div className={styles.iotGrid}>
        <div>
          <div className={styles.icon} style={{ background: p.iconBg }}>{p.emoji}</div>
          <span className={styles.tag} style={{ background: p.tagBg, color: p.tagColor }}>{p.tag}</span>
          <h3 className={styles.name}>{p.name}</h3>
          <p className={styles.desc}>{p.desc}</p>
          <TechRow tech={p.tech} />
        </div>
        <div className={styles.iotTypes}>
          {p.types.map((t) => (
            <div key={t.label} className={styles.iotType} style={{ borderColor: 'rgba(16,185,129,0.2)', background: 'rgba(16,185,129,0.08)' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 6 }}>{t.emoji}</div>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#6ee7b7' }}>{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p }) {
  return (
    <div className={`glass-card tilt-wrap ${styles.card}`}>
      <div className={styles.accent} style={{ background: p.accent }} />
      <div className={styles.glow} style={{ background: `radial-gradient(circle,${p.glow},transparent)` }} />
      <div className={styles.icon} style={{ background: p.iconBg }}>{p.emoji}</div>
      <span className={styles.tag} style={{ background: p.tagBg, color: p.tagColor }}>{p.tag}</span>
      <h3 className={styles.name}>{p.name}</h3>
      <p className={styles.desc}>{p.desc}</p>
      <TechRow tech={p.tech} />
      <a href={p.link} className={styles.link} style={{ color: p.tagColor }}>
        View Project <span className="mdi mdi-arrow-right" />
      </a>
    </div>
  );
}

function TechRow({ tech }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
      {tech.map((t) => (
        <span key={t} style={{
          fontSize: '0.72rem', fontWeight: 600,
          padding: '4px 11px', borderRadius: 50,
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'var(--text-secondary)'
        }}>{t}</span>
      ))}
    </div>
  );
}
