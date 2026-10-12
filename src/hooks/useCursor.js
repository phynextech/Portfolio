// src/hooks/useCursor.js
import { useEffect } from 'react';

export function useCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    const glow = document.getElementById('cursor-glow');
    if (!dot || !ring || !glow) return;

    let mx = 0, my = 0, rx = 0, ry = 0, gx = 0, gy = 0;
    let rafId;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener('mousemove', onMove);

    const update = () => {
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      gx += (mx - gx) * 0.06;
      gy += (my - gy) * 0.06;
      glow.style.transform = `translate(${gx}px,${gy}px) translate(-50%,-50%)`;
      rafId = requestAnimationFrame(update);
    };
    update();

    const onDown = () => {
      dot.style.transform += ' scale(0.7)';
    };
    document.addEventListener('mousedown', onDown);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      cancelAnimationFrame(rafId);
    };
  }, []);
}
