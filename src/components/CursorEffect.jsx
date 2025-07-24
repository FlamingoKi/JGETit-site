import React, { useEffect, useRef, useState } from "react";

const DIGIT_COLOR = "#D6FE51";
const DIGIT_SIZE = 14; // px, меньше стандартного курсора
const DIGIT_LIFETIME = 800; // ms
const DIGIT_DISTANCE = 40; // px, насколько "улетает" цифра
const EFFECTS = [
  'down', // вниз
  'up',   // вверх
  'side', // вбок
];

function getRandomDirection(effect) {
  if (effect === 'down') {
    const dx = (Math.random() - 0.5) * DIGIT_DISTANCE * 0.5;
    const dy = Math.random() * DIGIT_DISTANCE * 0.7 + DIGIT_DISTANCE * 0.7;
    return { x: dx, y: dy };
  } else if (effect === 'up') {
    const dx = (Math.random() - 0.5) * DIGIT_DISTANCE * 0.5;
    const dy = -1 * (Math.random() * DIGIT_DISTANCE * 0.7 + DIGIT_DISTANCE * 0.7);
    return { x: dx, y: dy };
  } else if (effect === 'side') {
    const dx = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * DIGIT_DISTANCE * 0.7 + DIGIT_DISTANCE * 0.7);
    const dy = (Math.random() - 0.5) * DIGIT_DISTANCE * 0.3;
    return { x: dx, y: dy };
  }
  return { x: 0, y: 0 };
}

const CursorEffect = () => {
  const [digits, setDigits] = useState([]);
  const idRef = useRef(0);

  useEffect(() => {
    const handleClick = (e) => {
      const { clientX, clientY } = e;
      const digit = Math.random() > 0.5 ? "1" : "0";
      const effect = EFFECTS[Math.floor(Math.random() * EFFECTS.length)];
      const direction = getRandomDirection(effect);
      const id = idRef.current++;
      setDigits((prev) => [
        ...prev,
        {
          id,
          digit,
          x: clientX,
          y: clientY,
          dx: direction.x,
          dy: direction.y,
          effect,
        },
      ]);
      setTimeout(() => {
        setDigits((prev) => prev.filter((d) => d.id !== id));
      }, DIGIT_LIFETIME);
    };
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div style={{ position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 9999 }}>
      {digits.map((d) => (
        <span
          key={d.id}
          style={{
            position: "absolute",
            left: d.x,
            top: d.y,
            fontSize: DIGIT_SIZE,
            color: DIGIT_COLOR,
            fontWeight: 700,
            userSelect: "none",
            pointerEvents: "none",
            transform: `translate(-50%, -50%)`,
            animation: `cursor-digit-fly-${d.effect} ${DIGIT_LIFETIME}ms linear forwards`,
            '--dx': `${d.dx}px`,
            '--dy': `${d.dy}px`,
          }}
        >
          {d.digit}
        </span>
      ))}
      <style>{`
        @keyframes cursor-digit-fly-down {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) translate(0, 0) scale(1);
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) translate(var(--dx), var(--dy)) scale(1.2);
          }
        }
        @keyframes cursor-digit-fly-up {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) translate(0, 0) scale(1);
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) translate(var(--dx), var(--dy)) scale(0.8);
          }
        }
        @keyframes cursor-digit-fly-side {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) translate(0, 0) scale(1);
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) translate(var(--dx), var(--dy)) rotate(30deg) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default CursorEffect;
