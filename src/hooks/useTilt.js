// src/hooks/useTilt.js
import { useEffect } from 'react';

export function useTilt() {
  useEffect(() => {
    const els = document.querySelectorAll('.tilt-wrap');

    const handlers = [];
    els.forEach((el) => {
      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        el.style.transform = `perspective(1200px) rotateX(${-dy * 10}deg) rotateY(${dx * 10}deg) scale(1.02)`;
        el.style.transition = 'transform 0.1s ease';
      };
      const onLeave = () => {
        el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)';
        el.style.transition = 'transform 0.5s ease';
      };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      handlers.push({ el, onMove, onLeave });
    });

    return () => {
      handlers.forEach(({ el, onMove, onLeave }) => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  });
}
