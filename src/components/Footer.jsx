import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-row">
        <div className="footer-col footer-brand">
          <div className="footer-brand-title">ЦифровыеРешения</div>
          <div className="footer-brand-desc">Повышаем уровень бизнеса с помощью передовых цифровых решений</div>
        </div>
        <div className="footer-col footer-services">
          <div className="footer-col-title">Услуги</div>
          <ul className="footer-list">
            <li className="footer-list-item"><a className="footer-link" href="#services">Разработка сайтов</a></li>
            <li className="footer-list-item"><a className="footer-link" href="#services">Создание чат-ботов</a></li>
            <li className="footer-list-item"><a className="footer-link" href="#services">Пользовательские скрипты</a></li>
          </ul>
        </div>
        <div className="footer-col footer-company">
          <div className="footer-col-title">Компания</div>
          <ul className="footer-list">
            <li className="footer-list-item"><a className="footer-link" href="#about">О нас</a></li>
            <li className="footer-list-item"><a className="footer-link" href="#portfolio">Портфолио</a></li>
            <li className="footer-list-item"><a className="footer-link" href="#reviews">Отзывы</a></li>
          </ul>
        </div>
        <div className="footer-col footer-contacts">
          <div className="footer-col-title">Связь</div>
          <div className="footer-contacts-btns">
            <button className="footer-contact-btn">@</button>
            <button className="footer-contact-btn">☎</button>
            <button className="footer-contact-btn">✉</button>
            <button className="footer-contact-btn">🌐</button>
          </div>
        </div>
      </div>
      <div className="footer-copyright">© 2025 Ваш сайт</div>
    </footer>
  );
}
