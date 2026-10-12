// src/hooks/useTypewriter.js
import { useEffect, useRef } from 'react';

export function useTypewriter(elementId, words, speed = 80, deleteSpeed = 50, pause = 1800) {
  const stateRef = useRef({ idx: 0, charIdx: 0, deleting: false });

  useEffect(() => {
    const el = document.getElementById(elementId);
    if (!el) return;

    let timeoutId;
    const type = () => {
      const { idx, charIdx, deleting } = stateRef.current;
      const word = words[idx % words.length];

      if (!deleting) {
        el.textContent = word.slice(0, charIdx + 1);
        if (charIdx + 1 >= word.length) {
          stateRef.current = { idx, charIdx: charIdx + 1, deleting: true };
          timeoutId = setTimeout(type, pause);
        } else {
          stateRef.current = { idx, charIdx: charIdx + 1, deleting: false };
          timeoutId = setTimeout(type, speed);
        }
      } else {
        el.textContent = word.slice(0, charIdx - 1);
        if (charIdx - 1 <= 0) {
          stateRef.current = { idx: idx + 1, charIdx: 0, deleting: false };
          timeoutId = setTimeout(type, 300);
        } else {
          stateRef.current = { idx, charIdx: charIdx - 1, deleting: true };
          timeoutId = setTimeout(type, deleteSpeed);
        }
      }
    };

    timeoutId = setTimeout(type, 500);
    return () => clearTimeout(timeoutId);
  }, [elementId, words, speed, deleteSpeed, pause]);
}
