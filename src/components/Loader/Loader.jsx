// src/components/Loader/Loader.jsx
import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 2200);
    return () => clearTimeout(t);
  }, []);

  if (hidden) return null;

  return (
    <div className={styles.loader} role="status" aria-label="Loading">
      <div className={styles.logo}>Prem M</div>
      <div className={styles.barTrack}>
        <div className={styles.barFill} />
      </div>
      <div className={styles.text}>Crafting your experience…</div>
    </div>
  );
}
