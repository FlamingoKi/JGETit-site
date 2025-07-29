import React from "react";
import Typography from "@mui/material/Typography";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <Typography variant="h4" align="center" gutterBottom className="about-title">
        <span className="about-title-white">О</span>
        <span className="about-title-green">нас</span>
      </Typography>
      <Typography variant="subtitle1" align="center" className="about-subtitle" gutterBottom>
        Инновации в цифровой сфере с передовыми решениями
      </Typography>
      <div className="about-row">
        <div className="about-left">
          <div className="about-block">
            <Typography variant="h6" className="about-block-title" gutterBottom>
              Наша миссия
            </Typography>
            <Typography variant="body2" className="about-block-text" gutterBottom>
              Предоставлять бизнесу инновационные цифровые решения, которые стимулируют рост, улучшают пользовательский опыт и создают долгосрочные конкурентные преимущества на цифровом рынке.
            </Typography>
          </div>
          <div className="about-block">
            <Typography variant="h6" className="about-block-title" gutterBottom>
              Наше видение
            </Typography>
            <Typography variant="body2" className="about-block-text" gutterBottom>
              Стать ведущим цифровым агентством, которое превращает идеи в мощные цифровые решения, устанавливая новые стандарты инноваций и совершенства в веб-разработке.
            </Typography>
          </div>
          <div className="about-block">
            <Typography variant="h6" className="about-block-title" gutterBottom>
              Наши ценности
            </Typography>
            <Typography variant="body2" className="about-block-text" gutterBottom>
              Инновации, качество, прозрачность и успех клиентов - это основа всего, что мы делаем. Мы верим в построение долгосрочных партнерских отношений и предоставление решений, превосходящих ожидания.
            </Typography>
          </div>
        </div>
        <div className="about-right">
          <div className="about-stats">
            <Typography variant="h3" className="about-stats-number">
              150
            </Typography>
            <Typography variant="body2" className="about-stats-label">
              Завершенных проектов
            </Typography>
            <Typography variant="h3" className="about-stats-number">
              95%
            </Typography>
            <Typography variant="body2" className="about-stats-label">
              Удовлетворенность клиентов
            </Typography>
            <Typography variant="h3" className="about-stats-number">
              5
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
