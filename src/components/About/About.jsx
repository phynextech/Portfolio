// src/components/About/About.jsx
import { personal } from '../../data/portfolioData';
import styles from './About.module.css';

const highlights = [
  { icon: '📱', num: '4+', label: 'Play Store Apps Published' },
  { icon: '🧠', num: '15+', label: 'Certifications Earned' },
  { icon: '🤖', num: '10+', label: 'IoT & Robotics Builds' },
  { icon: '🏅', num: '2nd', label: 'Inter-College Coding' },
];

const socialLinks = [
  { id: 'email', icon: 'mdi-email', bg: 'rgba(99,102,241,0.15)', color: '#a5b4fc', title: 'Email Me', sub: personal.email, href: `mailto:${personal.email}` },
  { id: 'linkedin', icon: 'mdi-linkedin', bg: 'rgba(10,102,194,0.2)', color: '#60a5fa', title: 'LinkedIn', sub: personal.linkedinHandle, href: personal.linkedin, target: '_blank' },
  { id: 'play', icon: 'mdi-google-play', bg: 'rgba(16,185,129,0.15)', color: '#34d399', title: 'Phynex on Play Store', sub: '4+ Published Android Apps', href: personal.playStore, target: '_blank' },
  { id: 'phone', icon: 'mdi-phone', bg: 'rgba(6,182,212,0.15)', color: '#22d3ee', title: 'Call Me', sub: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
];

export default function About() {
  return (
    <section id="about" className={`section-pad ${styles.about}`} aria-label="About section">
      <div className="container">
        <div className={styles.grid}>
          {/* Left */}
          <div className="reveal-left">
            <div className="section-label">About Me</div>
            <h2 className="section-title">Building the <span className="gradient-text">Future</span> with Code & AI</h2>
            <p className={styles.bio}>
              I'm <strong>Prem M</strong>, a passionate <strong>Full Stack Developer</strong> and the founder of <strong>Phynex</strong> — a personal tech brand focused on mobile apps, web development, and AI projects. I'm currently pursuing my BSc in Computer Science (AI &amp; ML) at Takshashila University with a CGPA of 8.7.
            </p>
            <br />
            <p className={styles.bio}>
              I build products that blend intelligence with exceptional user experiences — from <strong>cross-device connectivity platforms</strong> to <strong>AI-powered chat systems</strong>, <strong>IoT robots</strong>, and <strong>published Android applications</strong>. I've also filed a <strong>patent</strong> for a novel file-transfer system using Wi-Fi Direct.
            </p>
            <div className={`${styles.highlights} stagger-children`} style={{ marginTop: '24px' }}>
              {highlights.map((h) => (
                <div key={h.label} className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>{h.icon}</div>
                  <div className={styles.highlightNum}>{h.num}</div>
                  <div className={styles.highlightDesc}>{h.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className={`${styles.linksGrid} reveal-right`}>
            {socialLinks.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target={s.target}
                rel={s.target ? 'noopener noreferrer' : undefined}
                className={styles.socialCard}
              >
                <div className={styles.socialIcon} style={{ background: s.bg, color: s.color }}>
                  <span className={`mdi ${s.icon}`} />
                </div>
                <div className={styles.socialText}>
                  <strong>{s.title}</strong>
                  <span>{s.sub}</span>
                </div>
                <span className={`mdi mdi-arrow-right ${styles.arrow}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
