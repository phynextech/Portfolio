// src/hooks/useCounter.js
import { useEffect, useRef } from 'react';

export function useCounter() {
  useEffect(() => {
    const counters = document.querySelectorAll('[data-count]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.done) {
            entry.target.dataset.done = '1';
            const target = parseFloat(entry.target.dataset.count);
            const isDecimal = String(target).includes('.');
            const duration = 1800;
            const start = performance.now();
            const animate = (now) => {
              const t = Math.min((now - start) / duration, 1);
              const ease = 1 - Math.pow(1 - t, 4);
              const val = ease * target;
              if (t < 1) {
                entry.target.textContent = isDecimal ? val.toFixed(1) : Math.floor(val) + '';
                requestAnimationFrame(animate);
              } else {
                entry.target.textContent = isDecimal ? target.toFixed(1) : target + '+';
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
}
