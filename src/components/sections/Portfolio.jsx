import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Портфолио</h2>
      <div className="portfolio-subtitle">Демонстрируем наши лучшие работы и успешные проекты</div>
      <div className="portfolio-row">
        <div className="portfolio-card">Работа 1</div>
        <div className="portfolio-card">Работа 2</div>
        <div className="portfolio-card">Работа 3</div>
      </div>
    </section>
  );
}
