import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section id="home">
      <div className="home-left">
        <div className="home-title">
          Мы создаем сайты,<br />которые продают.<br />Чат-боты, которые<br />удивляют.<br />Скрипты, которые<br />экономят время.
        </div>
        <div className="home-btns">
          <button className="home-btn">Начать</button>
          <button className="home-btn-alt">Воплотить идею в код</button>
        </div>
      </div>
      <div className="home-video">
        <div className="home-video-box">
          Здесь будет видео
        </div>
      </div>
    </section>
  );
}
