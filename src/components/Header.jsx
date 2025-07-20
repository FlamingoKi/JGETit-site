import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-logo-box">
        <img className="header-logo" src="/logo.png" alt="Логотип" />
      </div>
      <nav>
        <ul className="header-nav-list">
          <li><a className="header-nav-link" href="#home">Главная</a></li>
          <li><a className="header-nav-link" href="#about">О нас</a></li>
          <li><a className="header-nav-link" href="#services">Услуги</a></li>
          <li><a className="header-nav-link" href="#portfolio">Портфолио</a></li>
          <li><a className="header-nav-link" href="#reviews">Отзывы</a></li>
          <li><a className="header-nav-link" href="#contacts">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
}
