// src/components/Footer/Footer.jsx
import { personal } from '../../data/portfolioData';

export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '40px 24px',
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-glass)',
      fontSize: '0.8rem',
      color: 'var(--text-muted)'
    }}>
      Crafted with <span style={{ color: '#ec4899' }}>♥</span> by <strong style={{ color: '#a5b4fc' }}>{personal.name}</strong> · Founder of <strong style={{ color: '#06b6d4' }}>{personal.brand}</strong> · 2026
    </footer>
  );
}
