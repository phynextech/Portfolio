// src/components/Hero/Hero.jsx
import { useRef } from 'react';
import { useParticles } from '../../hooks/useParticles';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useCounter } from '../../hooks/useCounter';
import { useTilt } from '../../hooks/useTilt';
import { personal } from '../../data/portfolioData';
import styles from './Hero.module.css';

export default function Hero() {
  const canvasRef = useRef(null);
  useParticles(canvasRef);
  useTypewriter('typed-role', personal.roles);
  useCounter();
  useTilt();

  return (
    <section id="hero" className={styles.hero} aria-label="Hero section">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.bg} />
      <div className={styles.mesh} />
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />

      <div className={styles.content}>
        <div className={styles.inner}>
          {/* Left */}
          <div className={styles.left}>
            <div className={styles.badge}>
              <span className={styles.dot} />
              BSc CS AI&ML · CGPA 8.7
            </div>
            <h1 className={styles.name}>
              Hello, I'm
              <span className={styles.gradientName}>Prem M</span>
            </h1>
            <p className={styles.title}>
              <span id="typed-cursor" className={styles.cursor} />
              <span id="typed-role" className={styles.typedRole}>Full Stack Developer</span>
              <br />
              Founder of <strong className={styles.brand}>Phynex</strong> Tech Brand
            </p>

            <div className={styles.stats}>
              {personal.stats.map((s, i) => (
                <div key={s.label} className={styles.statGroup} style={{display: 'contents'}}>
                  <div className={styles.statItem}>
                    <div
                      className={styles.statNum}
                      data-count={s.num}
                    >
                      {s.decimal ? '0.0' : '0+'}
                    </div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                  {i < personal.stats.length - 1 && (
                    <div className={styles.statDivider} />
                  )}
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <a href="#projects" className="btn-primary">
                <span className="mdi mdi-rocket-launch-outline" />
                View Projects
              </a>
              <a href="#contact" className="btn-glass">
                <span className="mdi mdi-email-outline" />
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right — 3D Profile Card */}
          <div className={styles.right}>
            <div className={`${styles.floatBadge} ${styles.fb1} glass-card`}>
              <span>🏆</span>
              <div>
                <div className={styles.fbTitle}>Patent Published</div>
                <div className={styles.fbSub}>Wi-Fi Direct Transfer</div>
              </div>
            </div>
            <div className={`${styles.floatBadge} ${styles.fb2} glass-card`}>
              <span>🚀</span>
              <div>
                <div className={styles.fbTitle}>Phynex Brand</div>
                <div className={styles.fbSub}>Founder & Developer</div>
              </div>
            </div>

            <div className={`${styles.profileCard} tilt-wrap`}>
              <div className={styles.avatar}>PM</div>
              <div className={styles.cardName}>{personal.name}</div>
              <div className={styles.cardRole}>Full Stack Developer & AI Engineer</div>
              <ul className={styles.infoList}>
                <li><span className="mdi mdi-map-marker-outline" />{personal.location}</li>
                <li><span className="mdi mdi-school-outline" />Takshashila University · BSc CS AI&ML</li>
                <li><span className="mdi mdi-phone-outline" />{personal.phone}</li>
                <li><span className="mdi mdi-email-outline" />{personal.email}</li>
                <li><span className="mdi mdi-linkedin" />{personal.linkedinHandle}</li>
                <li><span className="mdi mdi-google-play" />4+ Apps on Google Play Store</li>
              </ul>
              <div className={styles.availability}>
                <span className={styles.availDot} />
                Open to Opportunities
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        Scroll Down
      </div>
    </section>
  );
}
