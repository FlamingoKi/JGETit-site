import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <h2>О нас</h2>
      <div className="about-subtitle">Инновации в цифровой сфере с передовыми решениями</div>
      <div className="about-row">
        <div className="about-left">
          <div className="about-block" >
            <div className="about-block-title">Наша миссия</div>
            <div className="about-block-text">Предоставлять бизнесу инновационные цифровые решения, которые стимулируют рост, улучшают пользовательский опыт и создают долгосрочные конкурентные преимущества на цифровом рынке.</div>
          </div>
          <div className="about-block">
            <div className="about-block-title">Наше видение</div>
            <div className="about-block-text">Стать ведущим цифровым агентством, которое превращает идеи в мощные цифровые решения, устанавливая новые стандарты инноваций и совершенства в веб-разработке.</div>
          </div>
          <div className="about-block">
            <div className="about-block-title">Наши ценности</div>
            <div className="about-block-text">Инновации, качество, прозрачность и успех клиентов - это основа всего, что мы делаем. Мы верим в построение долгосрочных партнерских отношений и предоставление решений, превосходящих ожидания.</div>
          </div>
        </div>
        <div className="about-right">
          <div className="about-stats">
            <div className="about-stats-number">150</div>
            <div className="about-stats-label">Завершенных проектов</div>
            <div className="about-stats-number">95%</div>
            <div className="about-stats-label">Удовлетворенность клиентов</div>
            <div className="about-stats-number">5</div>
            <div className="about-stats-label">Лет опыта</div>
          </div>
        </div>
      </div>
    </section>
  );
}
