import React, { useRef, useEffect } from "react";

const PARTICLE_COLOR = "rgba(255,255,255,0.85)";
const PARTICLE_COUNT = 18;
const PARTICLE_MIN_SIZE = 1.1;
const PARTICLE_MAX_SIZE = 2.2;
const PARTICLE_MIN_SPEED = 0.45;
const PARTICLE_MAX_SPEED = 1.1;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

// Новый параметр: allowStartAboveScreen — если true, частица может стартовать в любой точке от maxHeight до низа
function createParticle(width, height, allowStartAboveScreen = false) {
  const size = randomBetween(PARTICLE_MIN_SIZE, PARTICLE_MAX_SIZE);
  const x = randomBetween(0, width);
  const y = allowStartAboveScreen
    ? randomBetween(0, height + height * 0.2)
    : height + randomBetween(0, height * 0.2);
  const speed = randomBetween(PARTICLE_MIN_SPEED, PARTICLE_MAX_SPEED);
  const alpha = randomBetween(0.38, 0.7);
  return {
    x,
    y,
    size,
    speed,
    alpha,
    baseAlpha: alpha,
    drift: randomBetween(-0.08, 0.08),
    fadeHeight: height * 0.4,
    maxHeight: 0,
  };
}

export default function DustParticlesBackground() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    resize();
    window.addEventListener("resize", resize);

    // Инициализация: частицы равномерно распределены по высоте экрана
    particlesRef.current = Array.from(
      { length: PARTICLE_COUNT },
      () => createParticle(width, height, true)
    );

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let p of particlesRef.current) {
        // Move up
        p.y -= p.speed;
        p.x += p.drift;

        // Fade out as it rises
        if (p.y < p.fadeHeight) {
          p.alpha = Math.max(0, p.baseAlpha * ((p.maxHeight - p.y) / (p.maxHeight - p.fadeHeight)));
        } else {
          p.alpha = p.baseAlpha;
        }

        // Draw
        if (p.alpha > 0.01) {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = PARTICLE_COLOR;
          ctx.shadowColor = "#D6FE51";
          ctx.shadowBlur = 0;
          ctx.fill();
          ctx.restore();
        }

        // Respawn if out of view or faded
        if (p.y < p.maxHeight || p.alpha <= 0.01 || p.x < -10 || p.x > width + 10) {
          Object.assign(p, createParticle(width, height, false));
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        zIndex: 1,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        background: "transparent"
      }}
      aria-hidden="true"
    />
  );
}
