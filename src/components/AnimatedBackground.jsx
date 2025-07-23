import React, { useRef, useEffect } from "react";

const ORB_COLOR = "rgba(214,254,81,0.7)";
const ORB_MIN_RADIUS = 40;
const ORB_MAX_RADIUS = 120;
const ORB_COUNT = 7;
const ORB_MIN_SPEED = 0.08;
const ORB_MAX_SPEED = 0.18;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createOrb(width, height) {
  const radius = randomBetween(ORB_MIN_RADIUS, ORB_MAX_RADIUS);
  return {
    x: randomBetween(radius, width - radius),
    y: randomBetween(radius, height - radius),
    vx: randomBetween(-ORB_MAX_SPEED, ORB_MAX_SPEED),
    vy: randomBetween(-ORB_MAX_SPEED, ORB_MAX_SPEED),
    baseRadius: radius,
    radius,
    pulseDir: Math.random() > 0.5 ? 1 : -1,
    pulseSpeed: randomBetween(0.08, 0.18),
    alpha: randomBetween(0.3, 0.95), // увеличен разброс прозрачности
    alphaDir: Math.random() > 0.5 ? 1 : -1,
    alphaSpeed: randomBetween(0.0007, 0.002), // мигание медленнее
  };
}

function handleCollision(orbA, orbB) {
  const dx = orbB.x - orbA.x;
  const dy = orbB.y - orbA.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist < orbA.radius + orbB.radius) {
    // Simple elastic collision: swap velocities
    [orbA.vx, orbB.vx] = [orbB.vx, orbA.vx];
    [orbA.vy, orbB.vy] = [orbB.vy, orbA.vy];
    // Move them apart
    const overlap = orbA.radius + orbB.radius - dist;
    const nx = dx / dist;
    const ny = dy / dist;
    orbA.x -= nx * overlap / 2;
    orbA.y -= ny * overlap / 2;
    orbB.x += nx * overlap / 2;
    orbB.y += ny * overlap / 2;
  }
}

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const orbsRef = useRef([]);
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

    // Init orbs
    orbsRef.current = Array.from({ length: ORB_COUNT }, () => createOrb(width, height));

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Update orbs
      for (let orb of orbsRef.current) {
        // Move
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce off edges
        if (orb.x - orb.radius < 0) {
          orb.x = orb.radius;
          orb.vx *= -1;
        }
        if (orb.x + orb.radius > width) {
          orb.x = width - orb.radius;
          orb.vx *= -1;
        }
        if (orb.y - orb.radius < 0) {
          orb.y = orb.radius;
          orb.vy *= -1;
        }
        if (orb.y + orb.radius > height) {
          orb.y = height - orb.radius;
          orb.vy *= -1;
        }

        // Pulse (radius)
        orb.radius += orb.pulseDir * orb.pulseSpeed;
        if (orb.radius > orb.baseRadius + 18) orb.pulseDir = -1;
        if (orb.radius < orb.baseRadius - 18) orb.pulseDir = 1;

        // Alpha flicker
        orb.alpha += orb.alphaDir * orb.alphaSpeed;
        if (orb.alpha > 0.95) orb.alphaDir = -1;
        if (orb.alpha < 0.5) orb.alphaDir = 1;
      }

      // Handle collisions
      for (let i = 0; i < orbsRef.current.length; i++) {
        for (let j = i + 1; j < orbsRef.current.length; j++) {
          handleCollision(orbsRef.current[i], orbsRef.current[j]);
        }
      }

      // Draw orbs
      for (let orb of orbsRef.current) {
        ctx.save();
        ctx.globalAlpha = orb.alpha;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fillStyle = ORB_COLOR;
        ctx.shadowColor = "#D6FE51";
        ctx.shadowBlur = 60;
        ctx.fill();
        ctx.restore();
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
        zIndex: -1, // изменено с 0 на -1
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        filter: "blur(32px)",
        background: "#000",
        transition: "filter 0.3s"
      }}
      aria-hidden="true"
    />
  );
}
