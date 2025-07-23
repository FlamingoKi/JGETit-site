import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Home.css";

export default function Home() {
  return (
    <section id="home">
      <div className="home-left">
        <Typography variant="h4" className="home-title" gutterBottom>
          Мы создаем сайты,<br />которые продают.<br />Чат-боты, которые<br />удивляют.<br />Скрипты, которые<br />экономят время.
        </Typography>
        <div className="home-btns">
          <Button variant="contained" color="success" className="home-btn">Начать</Button>
          <Button variant="outlined" color="inherit" className="home-btn-alt">Воплотить идею в код</Button>
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
