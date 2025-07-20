import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <section id="services">
      <h2>Услуги</h2>
      <div className="services-subtitle">Комплексные цифровые решения, адаптированные под потребности вашего бизнеса</div>
      <div className="services-row">
        <div className="service-card">
          <div className="service-title">Разработка веб-сайтов</div>
          <div className="service-desc">Создаем потрясающие, отзывчивые веб-сайты, которые привлекают вашу аудиторию и увеличивают конверсии.</div>
          <ul>
            <li>Адаптивный дизайн</li>
            <li>SEO оптимизация</li>
            <li>Оптимизация производительности</li>
            <li>Пользовательские CMS решения</li>
          </ul>
          <button className="service-btn">Узнать больше</button>
        </div>
        <div className="service-card">
          <div className="service-title">Создание чат-ботов</div>
          <div className="service-desc">Интеллектуальные чат-боты, которые улучшают клиентский опыт и автоматизируют бизнес-процессы.</div>
          <ul>
            <li>ИИ-диалоги</li>
            <li>Мультиплатформенная интеграция</li>
            <li>Поддержка клиентов 24/7</li>
            <li>Аналитика и инсайты</li>
          </ul>
          <button className="service-btn">Узнать больше</button>
        </div>
        <div className="service-card">
          <div className="service-title">Разработка пользовательских скриптов</div>
          <div className="service-desc">Индивидуальные скрипты автоматизации и инструменты для оптимизации ваших бизнес-операций.</div>
          <ul>
            <li>Автоматизация процессов</li>
            <li>API интеграции</li>
            <li>Обработка данных</li>
            <li>Пользовательские инструменты</li>
          </ul>
          <button className="service-btn">Узнать больше</button>
        </div>
      </div>
    </section>
  );
}
