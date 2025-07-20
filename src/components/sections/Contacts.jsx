import React from "react";
import "./Contacts.css";

export default function Contacts() {
  return (
    <section id="contacts">
      <h2>Свяжитесь с нами</h2>
      <div className="contacts-subtitle">Готовы начать свой следующий проект? Давайте обсудим ваши потребности</div>
      <div className="contacts-row">
        <div className="contacts-info">
          <div className="contacts-info-title">Напишите нам</div>
          <div className="contacts-info-value">hello@tsifrovyeresheniya.com</div>
          <div className="contacts-info-title">Позвоните нам</div>
          <div className="contacts-info-value">+7 (999) 123-4567</div>
          <div className="contacts-info-title">Посетите нас</div>
          <div className="contacts-info-value">ул. Инновационная, 123<br />Москва, 123456</div>
        </div>
        <form>
          <input className="contacts-input" type="text" placeholder="Имя" required />
          <input className="contacts-input" type="email" placeholder="Электронная почта" required />
          <textarea className="contacts-input" placeholder="Сообщение" rows={4} required></textarea>
          <button className="contacts-btn" type="submit">Отправить сообщение</button>
        </form>
      </div>
    </section>
  );
}
