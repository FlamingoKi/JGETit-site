import React, { useEffect, useState, useRef } from "react";
import Typography from "@mui/material/Typography";
import "./About.css";

// Анимированный компонент для чисел
function AnimatedNumber({
  target,
  duration = 1200,
  format = (v) => v,
  start = false,
}) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) {
      setValue(0);
      return;
    }
    let startTime;
    function animate(ts) {
      if (!startTime) startTime = ts;
      let progress = Math.min((ts - startTime) / duration, 1);
      // ease-out: скорость уменьшается ближе к концу
      progress = 1 - Math.pow(1 - progress, 2);
      const current = Math.floor(progress * target);
      setValue(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    }
    requestAnimationFrame(animate);
  }, [target, duration, start]);
  return <span>{format(value)}</span>;
}

export default function About() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <Typography
        variant="h1"
        align="center"
        gutterBottom
        className="about-title"
      >
        <span className="about-title-white">О</span>
        <span className="about-title-green">нас</span>
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        className="about-subtitle"
        gutterBottom
      >
        Инновации в цифровой сфере с передовыми решениями
      </Typography>
      <div className="about-row">
        <div className="about-left">
          <div className="about-block">
            <Typography
              variant="h6"
              className="about-block-title"
              gutterBottom
            >
              Наша миссия
            </Typography>
            <Typography
              variant="body2"
              className="about-block-text"
              gutterBottom
            >
              Предоставлять бизнесу инновационные цифровые решения, которые
              стимулируют рост, улучшают пользовательский опыт и создают
              долгосрочные конкурентные преимущества на цифровом рынке.
            </Typography>
          </div>
          <div className="about-block">
            <Typography
              variant="h6"
              className="about-block-title"
              gutterBottom
            >
              Наше видение
            </Typography>
            <Typography
              variant="body2"
              className="about-block-text"
              gutterBottom
            >
              Стать ведущим цифровым агентством, которое превращает идеи в мощные
              цифровые решения, устанавливая новые стандарты инноваций и
              совершенства в веб-разработке.
            </Typography>
          </div>
          <div className="about-block">
            <Typography
              variant="h6"
              className="about-block-title"
              gutterBottom
            >
              Наши ценности
            </Typography>
            <Typography
              variant="body2"
              className="about-block-text"
              gutterBottom
            >
              Инновации, качество, прозрачность и успех клиентов - это основа
              всего, что мы делаем. Мы верим в построение долгосрочных
              партнерских отношений и предоставление решений, превосходящих
              ожидания.
            </Typography>
          </div>
        </div>
        <div className="about-right">
          <div className="about-stats">
            <Typography variant="h3" className="about-stats-number">
              <AnimatedNumber target={150} duration={1200} start={animate} />
            </Typography>
            <Typography variant="body2" className="about-stats-label">
              Завершенных проектов
            </Typography>
            <Typography variant="h3" className="about-stats-number">
              <AnimatedNumber
                target={95}
                duration={1200}
                format={(v) => `${v}%`}
                start={animate}
              />
            </Typography>
            <Typography variant="body2" className="about-stats-label">
              Удовлетворенность клиентов
            </Typography>
            <Typography variant="h3" className="about-stats-number">
              <AnimatedNumber target={5} duration={1200} start={animate} />
            </Typography>
            <Typography variant="body2" className="about-stats-label">
              Лет опыта
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
