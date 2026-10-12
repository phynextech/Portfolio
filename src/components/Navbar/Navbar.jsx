// src/components/Navbar/Navbar.jsx
import { useEffect, useState, useRef } from 'react';
import styles from './Navbar.module.css';

const links = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#internships', label: 'Internships' },
  { href: '#certificates', label: 'Certs' },
  { href: '#achievements', label: 'Patent' },
  { href: '#contact', label: 'Contact', cta: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <>
      {/* Scroll progress bar */}
      <ScrollProgress />

      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} role="navigation">
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo} aria-label="Prem M Home">
            PM<span className={styles.logoDot} />
          </a>

          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`${styles.link} ${l.cta ? styles.cta : ''} ${activeSection === l.href.slice(1) ? styles.active : ''}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`${styles.mobileNav} ${mobileOpen ? styles.mobileOpen : ''}`} role="dialog">
        <button className={styles.closeBtn} onClick={close} aria-label="Close navigation">
          <span className="mdi mdi-close" />
        </button>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close} className={styles.mobileLink}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}

function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setWidth((window.scrollY / total) * 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className={styles.progress} style={{ width: `${width}%` }} />;
}
